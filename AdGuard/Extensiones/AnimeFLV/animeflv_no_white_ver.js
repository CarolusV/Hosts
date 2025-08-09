// ==UserScript==
// @name          AnimeFLV Dark Mode Plus
// @description   Enhanced dark mode and UI improvements for AnimeFLV
// @author        CarolusV
// @homepage      https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @match         *://*.animeflv.net/*
// @match         *://animeflv.net/*
// @run-at        document-start
// @version       0.58
// @grant         none
// ==/UserScript==

// APLICAR FONDO OSCURO INMEDIATAMENTE
(function() {
    const style = document.createElement('style');
    style.textContent = `
        html {
            background-color: #0d1117 !important;
            color: #0d1117 !important;
        }
        body {
            background-color: #0d1117 !important;
            color: #0d1117 !important;
            visibility: hidden !important;
        }
        body.styles-ready {
            visibility: visible !important;
        }
    `;
    style.id = 'instant-dark-emergency';
    
    // Insertar inmediatamente sin esperar nada
    (document.head || document.documentElement || document).appendChild(style);
})();

(function() {
    'use strict';

    const CONFIG = {
        cssUrl: 'https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css',
        retryAttempts: 3,
        retryDelay: 1000, // milliseconds
    };

    // Function to handle errors with retry logic using fetch
    async function fetchWithRetry(url, attempts = CONFIG.retryAttempts) {
        for (let i = 0; i < attempts; i++) {
            try {
                const response = await fetch(url, {
                    method: 'GET',
                    cache: 'no-cache',
                    headers: {
                        'Accept': 'text/css,text/plain,*/*'
                    }
                });
                
                if (response.ok) {
                    return await response.text();
                } else {
                    throw new Error(`HTTP ${response.status}`);
                }
            } catch (error) {
                console.log(`Attempt ${i + 1} failed:`, error);
                if (i === attempts - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay));
            }
        }
    }

    // Function to apply custom styles
    async function applyStyles() {
        try {
            const css = await fetchWithRetry(CONFIG.cssUrl);
            const style = document.createElement('style');
            style.textContent = css;
            style.id = 'animeflv-dark-mode';
            style.type = 'text/css';
            
            if (document.head) {
                document.head.appendChild(style);
                console.log('AnimeFLV Dark Mode CSS loaded successfully from external source');
                showContent();
            } else {
                // If head is not available yet, wait for it
                const observer = new MutationObserver((mutations, obs) => {
                    if (document.head) {
                        document.head.appendChild(style);
                        obs.disconnect();
                        console.log('AnimeFLV Dark Mode CSS loaded successfully (delayed)');
                        showContent();
                    }
                });
                
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
        } catch (error) {
            console.error('Failed to apply custom styles:', error);
            // Mostrar contenido aunque falle
            showContent();
        }
    }

    // Mostrar el contenido cuando esté listo
    function showContent() {
        if (document.body) {
            document.body.classList.add('styles-ready');
        }
        
        // Remover el estilo de emergencia después de un momento
        setTimeout(() => {
            const emergencyStyle = document.getElementById('instant-dark-emergency');
            if (emergencyStyle) {
                emergencyStyle.remove();
            }
        }, 500);
    }

    // Initialize the script
    function init() {
        // Ensure we're on the right page
        if (window.location.hostname.includes('animeflv.net')) {
            applyStyles().catch(error => {
                console.error('Error in applyStyles:', error);
                showContent(); // Mostrar contenido aunque falle
            });
        }
    }

    // Execute script when page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // Page already loaded
        init();
    }

    // Also apply when navigating (for SPA behavior)
    window.addEventListener('popstate', init);
    
    // Observer for dynamic content
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check for white background elements that might have been added
                const whiteElements = document.querySelectorAll('[style*="background-color: white"], [style*="background-color: #fff"], [style*="background: white"]');
                whiteElements.forEach(el => {
                    el.style.setProperty('background-color', '#2d2d2d', 'important');
                });
            }
        });
    });

    // Start observing after page load
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

})();
