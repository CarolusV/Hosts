// ==UserScript==
// @name         Bloqueador de Pestañas Específicas
// @version      1.1
// @description  Bloquea nuevas pestañas de dominios específicos
// @author       CarolusV
// @match        https://fhd.seriesturcastv.to/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const domainsToRemove = [
        'ak.ptailadsol.net',
        'clunkyentirelinked.com'
    ];

    // Función para eliminar elementos
    function removeElements() {
        // Eliminar scripts
        document.querySelectorAll('script').forEach(script => {
            if (script.src && domainsToRemove.some(domain => script.src.includes(domain))) {
                script.remove();
            }
        });

        // Eliminar iframes
        document.querySelectorAll('iframe').forEach(iframe => {
            if (iframe.src && domainsToRemove.some(domain => iframe.src.includes(domain))) {
                iframe.remove();
            }
        });

        // Eliminar links
        document.querySelectorAll('link').forEach(link => {
            if (link.href && domainsToRemove.some(domain => link.href.includes(domain))) {
                link.remove();
            }
        });
    }

    // Observador para elementos nuevos
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.tagName) {
                    if (node.src && domainsToRemove.some(domain => node.src.includes(domain))) {
                        node.remove();
                    } else if (node.href && domainsToRemove.some(domain => node.href.includes(domain))) {
                        node.remove();
                    }
                }
            });
        });
        removeElements();
    });

    // Iniciar observador
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
            removeElements();
        });
    } else {
        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
        removeElements();
    }

    // Limpiar peticiones de red
    const originalFetch = window.fetch;
    window.fetch = function(url, options) {
        if (url && domainsToRemove.some(domain => url.toString().includes(domain))) {
            return new Promise(() => {});
        }
        return originalFetch.apply(this, arguments);
    };

    // Limpiar XHR
    const originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
        const xhr = new originalXHR();
        const originalOpen = xhr.open;
        xhr.open = function(method, url) {
            if (url && domainsToRemove.some(domain => url.includes(domain))) {
                return;
            }
            return originalOpen.apply(xhr, arguments);
        };
        return xhr;
    };
})();
