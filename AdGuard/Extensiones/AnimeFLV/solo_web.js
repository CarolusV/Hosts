// ==UserScript==
// @name         AnimeFlv - Bloquear Móvil, Solo Web
// @description  Bloquea m.animeflv.net y redirige a www3.animeflv.net con página de bloqueo
// @version      1.0
// @match        https://m.animeflv.net/*
// @match        https://animeflv.net/*
// @match        https://www.animeflv.net/*
// @match        https://*.animeflv.net/*
// @grant        none
// @run-at       document-start
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    
    // Configuración
    const ALLOWED_DOMAIN = 'www3.animeflv.net';
    const BLOCKED_MOBILE = 'm.animeflv.net';
    
    // Evitar loops infinitos
    if (window.animeflvProcessed) return;
    window.animeflvProcessed = true;
    
    /**
     * Crear página de bloqueo personalizada
     */
    function createBlockPage() {
        const currentHost = window.location.hostname;
        const currentUrl = window.location.href;
        
        // Reemplazar todo el contenido de la página
        document.documentElement.innerHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>AnimeFlv - Acceso Redirigido</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background: #1a1a1a;
                    color: white;
                    padding: 50px 20px;
                    margin: 0;
                }
                .container {
                    max-width: 400px;
                    margin: 0 auto;
                }
                button {
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 5px;
                    font-size: 18px;
                    cursor: pointer;
                    margin: 10px;
                    width: 100%;
                }
                button:hover {
                    background: #0056b3;
                }
                .auto-redirect {
                    font-size: 14px;
                    color: #ccc;
                    margin-top: 20px;
                }
                .blocked-info {
                    background: #dc3545;
                    padding: 15px;
                    border-radius: 5px;
                    margin: 20px 0;
                }
                .current-url {
                    font-family: monospace;
                    background: #333;
                    padding: 10px;
                    border-radius: 3px;
                    word-break: break-all;
                    font-size: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🎬 AnimeFlv</h1>
                
                <div class="blocked-info">
                    <h3>🚫 ACCESO MÓVIL BLOQUEADO</h3>
                    <p>La versión móvil está prohibida</p>
                </div>
                
                <p>Redirigiendo automáticamente a la versión web...</p>
                
                <div class="current-url">
                    <strong>URL Bloqueada:</strong><br>
                    ${currentUrl}
                </div>
                
                <button onclick="goToWeb()">Ir a Versión Web (www3.animeflv.net)</button>
                <button onclick="showInfo()">¿Por qué está bloqueado?</button>
                
                <div class="auto-redirect">
                    <p><strong>Redirección automática en <span id="countdown">3</span> segundos</strong></p>
                </div>
                
                <div id="info" style="display:none; background:#333; padding:15px; border-radius:5px; margin-top:20px; text-align:left;">
                    <h4>Información del bloqueo:</h4>
                    <ul style="text-align:left;">
                        <li><strong>Dominio actual:</strong> ${currentHost}</li>
                        <li><strong>Permitido:</strong> www3.animeflv.net únicamente</li>
                        <li><strong>Bloqueados:</strong> m.animeflv.net, animeflv.net, www.animeflv.net</li>
                        <li><strong>Razón:</strong> Script de usuario configurado para bloquear acceso móvil</li>
                    </ul>
                </div>
            </div>

            <script>
                function goToWeb() {
                    const newUrl = '${currentUrl}'.replace(/https?:\\/\\/[^\\/]*animeflv\\.net/g, 'https://www3.animeflv.net');
                    console.log('[AnimeFlv] Redirigiendo manualmente a:', newUrl);
                    window.location.href = newUrl;
                }
                
                function showInfo() {
                    const info = document.getElementById('info');
                    info.style.display = info.style.display === 'none' ? 'block' : 'none';
                }
                
                // Auto-redirect después de 3 segundos
                let countdown = 3;
                const countdownEl = document.getElementById('countdown');
                
                const timer = setInterval(() => {
                    countdown--;
                    countdownEl.textContent = countdown;
                    
                    if (countdown <= 0) {
                        clearInterval(timer);
                        goToWeb();
                    }
                }, 1000);
                
                // Log para debugging
                console.log('[AnimeFlv Block] Página de bloqueo mostrada para:', '${currentHost}');
                console.log('[AnimeFlv Block] URL original:', '${currentUrl}');
            </script>
        </body>
        </html>
        `;
    }
    
    /**
     * Función principal de redirect/bloqueo
     */
    function handleAccess() {
        const currentHost = window.location.hostname;
        const currentUrl = window.location.href;
        
        console.log('[AnimeFlv] Verificando acceso:', currentHost);
        
        // PERMITIR SOLO www3.animeflv.net
        if (currentHost === ALLOWED_DOMAIN) {
            console.log('[AnimeFlv] ✅ Acceso permitido:', currentHost);
            setupLinkProtection(); // Configurar protección de enlaces
            return;
        }
        
        // BLOQUEAR cualquier otro dominio de animeflv
        if (currentHost.includes('animeflv.net')) {
            console.log('[AnimeFlv] 🚫 Dominio bloqueado:', currentHost);
            
            // Intentar redirect inmediato primero
            const newUrl = currentUrl.replace(/https?:\/\/[^\/]*animeflv\.net/g, 'https://www3.animeflv.net');
            
            // Redirect agresivo
            try {
                window.location.replace(newUrl);
                return;
            } catch (e) {
                console.warn('[AnimeFlv] Redirect falló, mostrando página de bloqueo');
            }
            
            // Si el redirect falla, mostrar página de bloqueo
            setTimeout(() => {
                if (window.location.hostname !== ALLOWED_DOMAIN) {
                    createBlockPage();
                }
            }, 100);
        }
    }
    
    /**
     * Proteger enlaces en la página permitida
     */
    function setupLinkProtection() {
        function protectLink(link) {
            if (link.href && link.href.includes('animeflv.net') && !link.href.includes(ALLOWED_DOMAIN)) {
                // Corregir href del enlace
                link.href = link.href.replace(/https?:\/\/[^\/]*animeflv\.net/g, 'https://www3.animeflv.net');
                
                // Evento click de protección
                link.addEventListener('click', function(e) {
                    if (!this.href.includes(ALLOWED_DOMAIN) && this.href.includes('animeflv.net')) {
                        e.preventDefault();
                        const correctedUrl = this.href.replace(/https?:\/\/[^\/]*animeflv\.net/g, 'https://www3.animeflv.net');
                        console.log('[AnimeFlv] Enlace protegido redirigido:', correctedUrl);
                        window.location.href = correctedUrl;
                    }
                });
            }
        }
        
        // Proteger enlaces existentes
        const links = document.querySelectorAll('a[href*="animeflv.net"]');
        links.forEach(protectLink);
        
        // Observer para nuevos enlaces
        if (window.MutationObserver) {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) {
                            if (node.tagName === 'A') {
                                protectLink(node);
                            }
                            const newLinks = node.querySelectorAll ? 
                                           node.querySelectorAll('a[href*="animeflv.net"]') : [];
                            newLinks.forEach(protectLink);
                        }
                    });
                });
            });
            
            // Observar cuando body esté disponible
            const startObserver = () => {
                if (document.body) {
                    observer.observe(document.body, { childList: true, subtree: true });
                } else {
                    setTimeout(startObserver, 50);
                }
            };
            startObserver();
        }
    }
    
    // Ejecutar inmediatamente
    handleAccess();
    
})();
