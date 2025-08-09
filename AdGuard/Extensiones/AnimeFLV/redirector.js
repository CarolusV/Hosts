// ==UserScript==
// @name        AnimeFlv Mobile Redirect (Optimizado para Brave Mobile)
// @description Redirect móvil optimizado para navegadores móviles
// @match       https://m.animeflv.net/*
// @match       https://*.animeflv.net/*
// @version     3.0.0
// @grant       none
// @run-at      document-start
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    
    // Verificar si ya se ejecutó el redirect
    if (window.animeflvRedirectExecuted) {
        return;
    }
    window.animeflvRedirectExecuted = true;
    
    // Función de redirect más agresiva
    function forceRedirect() {
        const currentHost = window.location.hostname;
        const currentUrl = window.location.href;
        
        console.log('[AnimeFlv] Host actual:', currentHost);
        console.log('[AnimeFlv] URL actual:', currentUrl);
        
        if (currentHost === 'm.animeflv.net') {
            console.log('[AnimeFlv] Detectado dominio móvil, iniciando redirect...');
            
            const newUrl = currentUrl.replace('m.animeflv.net', 'www3.animeflv.net');
            console.log('[AnimeFlv] Nueva URL:', newUrl);
            
            // Intentar múltiples métodos de redirect
            try {
                // Método 1: replace inmediato
                window.location.replace(newUrl);
            } catch (e) {
                console.warn('[AnimeFlv] Replace falló, intentando href...');
                try {
                    // Método 2: href
                    window.location.href = newUrl;
                } catch (e2) {
                    console.warn('[AnimeFlv] href falló, intentando assign...');
                    // Método 3: assign
                    window.location.assign(newUrl);
                }
            }
            
            // Método 4: Backup con setTimeout por si los anteriores fallan
            setTimeout(function() {
                if (window.location.hostname === 'm.animeflv.net') {
                    console.log('[AnimeFlv] Backup redirect ejecutándose...');
                    document.location = newUrl;
                }
            }, 100);
            
            return true;
        }
        return false;
    }
    
    // Ejecutar redirect inmediatamente
    if (forceRedirect()) {
        // Detener ejecución del resto del script
        return;
    }
    
    // Si llegamos aquí, no se redirigió, configurar manejo de enlaces
    function setupLinkHandling() {
        console.log('[AnimeFlv] Configurando manejo de enlaces...');
        
        // Función para procesar enlaces
        function processLinks() {
            const links = document.querySelectorAll('a[href*="m.animeflv.net"]');
            links.forEach(function(link) {
                if (!link.hasAttribute('data-processed')) {
                    link.setAttribute('data-processed', 'true');
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        const newUrl = link.href.replace('m.animeflv.net', 'www3.animeflv.net');
                        console.log('[AnimeFlv] Redirigiendo enlace a:', newUrl);
                        window.location.href = newUrl;
                    }, {capture: true, passive: false});
                }
            });
        }
        
        // Event listener global más agresivo
        document.addEventListener('click', function(e) {
            const target = e.target;
            const link = target.closest('a');
            
            if (link && link.href && link.href.includes('m.animeflv.net')) {
                e.preventDefault();
                e.stopImmediatePropagation();
                const newUrl = link.href.replace('m.animeflv.net', 'www3.animeflv.net');
                console.log('[AnimeFlv] Click interceptado, redirigiendo a:', newUrl);
                window.location.href = newUrl;
                return false;
            }
        }, {capture: true, passive: false});
        
        // Procesar enlaces existentes
        processLinks();
        
        // Observer para enlaces dinámicos
        if (window.MutationObserver) {
            const observer = new MutationObserver(function(mutations) {
                let shouldProcess = false;
                mutations.forEach(function(mutation) {
                    if (mutation.addedNodes.length > 0) {
                        shouldProcess = true;
                    }
                });
                if (shouldProcess) {
                    processLinks();
                }
            });
            
            observer.observe(document.body || document.documentElement, {
                childList: true,
                subtree: true
            });
        }
        
        // Backup: procesar enlaces periódicamente
        setInterval(processLinks, 2000);
    }
    
    // Inicializar manejo de enlaces cuando sea seguro
    function init() {
        try {
            if (document.body) {
                setupLinkHandling();
            } else {
                setTimeout(init, 50);
            }
        } catch (error) {
            console.error('[AnimeFlv] Error en inicialización:', error);
        }
    }
    
    // Múltiples puntos de inicialización para máxima compatibilidad
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
        window.addEventListener('load', init);
    } else {
        init();
    }
    
    // Backup final
    setTimeout(init, 500);
    
})();
