// ==UserScript==
// @name        Redirect m.animeflv.net to www3.animeflv.net (Mejorado)
// @description Automatically redirects mobile AnimeFlv to desktop version with better handling
// @match       https://m.animeflv.net/*
// @match       https://www3.animeflv.net/*
// @version     2.0.0
// @grant       none
// @noframes
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';
    
    // Función para realizar el redirect
    function performRedirect() {
        if (window.location.hostname === 'm.animeflv.net') {
            console.log('[AnimeFlv Redirect] Detectado m.animeflv.net, redirigiendo...');
            const newUrl = window.location.href.replace('m.animeflv.net', 'www3.animeflv.net');
            
            // Usar replace para evitar bucles en el historial
            window.location.replace(newUrl);
            return true; // Indicar que se realizó el redirect
        }
        return false; // No se realizó redirect
    }
    
    // Ejecutar redirect inmediatamente si estamos en la URL móvil
    if (performRedirect()) {
        return; // Salir del script si se redirigió
    }
    
    // Función para manejar links dinámicos (solo si no se redirigió)
    function handleDynamicLinks() {
        console.log('[AnimeFlv Redirect] Configurando manejo de enlaces dinámicos...');
        
        // Event delegation para capturar clicks en enlaces
        document.addEventListener('click', function(e) {
            // Buscar el elemento 'a' más cercano (en caso de clicks en elementos hijos)
            const link = e.target.closest('a');
            
            if (link && link.href) {
                // Verificar si el enlace contiene la URL móvil
                if (link.href.includes('m.animeflv.net')) {
                    console.log('[AnimeFlv Redirect] Enlace móvil detectado:', link.href);
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const newUrl = link.href.replace('m.animeflv.net', 'www3.animeflv.net');
                    console.log('[AnimeFlv Redirect] Redirigiendo a:', newUrl);
                    window.location.href = newUrl;
                }
            }
        }, true); // Usar capture phase para mayor prioridad
        
        // También manejar enlaces que puedan agregarse dinámicamente
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            // Verificar enlaces agregados dinámicamente
                            const links = node.querySelectorAll ? node.querySelectorAll('a[href*="m.animeflv.net"]') : [];
                            links.forEach(function(link) {
                                console.log('[AnimeFlv Redirect] Enlace móvil dinámico detectado');
                                link.addEventListener('click', function(e) {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    const newUrl = link.href.replace('m.animeflv.net', 'www3.animeflv.net');
                                    window.location.href = newUrl;
                                });
                            });
                        }
                    });
                }
            });
        });
        
        // Observar cambios en el DOM
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
    
    // Función para inicializar el manejo de enlaces
    function initialize() {
        try {
            handleDynamicLinks();
            console.log('[AnimeFlv Redirect] Script inicializado correctamente');
        } catch (error) {
            console.error('[AnimeFlv Redirect] Error al inicializar:', error);
        }
    }
    
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        // El DOM ya está listo
        initialize();
    }
    
    // Backup: También inicializar cuando la ventana se haya cargado completamente
    if (document.readyState !== 'complete') {
        window.addEventListener('load', function() {
            if (!document.body.hasAttribute('data-animeflv-redirect-initialized')) {
                document.body.setAttribute('data-animeflv-redirect-initialized', 'true');
                initialize();
            }
        });
    }
    
})();
