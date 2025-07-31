// ==UserScript==
// @name          Google Personalizado Propio
// @description   Google.es Personalizado Propio
// @author        CarolusV
// @include       https://google.es/*
// @include       https://www.google.es/*
// @include       https://*.google.es/*
// @include       google.es/*
// @run-at        document-end
// @version       0.5
// @grant         none
// ==/UserScript==

(function() {
    'use strict';

    const CONFIG = {
        cssUrl: 'https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/Google/css.css',
        retryAttempts: 3,
        retryDelay: 1000
    };

    // Function to fetch CSS with retry logic
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
                console.log(`CSS fetch attempt ${i + 1} failed:`, error);
                if (i === attempts - 1) throw error;
                await new Promise(resolve => setTimeout(resolve, CONFIG.retryDelay));
            }
        }
    }

    // Function to apply external CSS styles
    async function applyStyles() {
        try {
            const css = await fetchWithRetry(CONFIG.cssUrl);
            const style = document.createElement('style');
            style.textContent = css;
            style.id = 'google-personalizado';
            style.type = 'text/css';
            
            if (document.head) {
                document.head.appendChild(style);
                console.log('Google Personalizado CSS loaded successfully');
            } else {
                const observer = new MutationObserver((mutations, obs) => {
                    if (document.head) {
                        document.head.appendChild(style);
                        obs.disconnect();
                        console.log('Google Personalizado CSS loaded successfully (delayed)');
                    }
                });
                
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
        } catch (error) {
            console.error('Failed to apply Google custom styles:', error);
        }
    }

    // Function to make elements with gb_ classes transparent
    function makeElementsTransparent() {
        // Background style to apply
        const backgroundStyle = 'background-color: #00000000 !important;';
        
        // Function to check if a class contains "gb_"
        function hasTargetClass(classString) {
            return /\bgb_/.test(classString);
        }
        
        // Function to add background style to an element
        function addBackgroundStyle(element) {
            element.style.cssText += backgroundStyle;
        }
        
        // Get all elements on the page
        const allElements = document.querySelectorAll('*');
        
        // Iterate over elements and apply style if they contain target classes
        allElements.forEach(element => {
            const elementClasses = element.getAttribute('class') || '';
            if (hasTargetClass(elementClasses)) {
                addBackgroundStyle(element);
            }
        });
        
        console.log('Transparent backgrounds applied to gb_ elements');
    }

    // Initialize the script
    function init() {
        // Ensure we're on the right domain
        if (window.location.hostname.includes('google.es')) {
            applyStyles().catch(error => {
                console.error('Error in applyStyles:', error);
            });
            makeElementsTransparent();
        }
    }

    // Execute script when page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // Page already loaded
        init();
    }

    // Observer for dynamic content changes
    const observer = new MutationObserver(function(mutations) {
        let needsUpdate = false;
        
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if any added nodes have gb_ classes
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const elementClasses = node.getAttribute('class') || '';
                        if (/\bgb_/.test(elementClasses)) {
                            needsUpdate = true;
                        }
                        // Also check child elements
                        const childElements = node.querySelectorAll('[class*="gb_"]');
                        if (childElements.length > 0) {
                            needsUpdate = true;
                        }
                    }
                });
            }
        });
        
        if (needsUpdate) {
            // Small delay to allow elements to render
            setTimeout(makeElementsTransparent, 100);
        }
    });

    // Start observing after page load
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

})();

  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
  makeElementsTransparent();
});
