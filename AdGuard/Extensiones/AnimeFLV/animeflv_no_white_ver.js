// ==UserScript==
// @name          AnimeFLV Dark Mode Plus
// @description   Enhanced dark mode and UI improvements for AnimeFLV
// @author        CarolusV (Enhanced version)
// @homepage      https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @match         *://*.animeflv.net/*
// @match         *://animeflv.net/*
// @run-at        document-start
// @version       0.46
// @grant         GM.xmlHttpRequest
// ==/UserScript==

(function() {
    'use strict';

    const CONFIG = {
        cssUrl: 'https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css',
        retryAttempts: 3,
        retryDelay: 1000, // milliseconds
    };

    // Function to handle errors with retry logic
    async function fetchWithRetry(url, attempts = CONFIG.retryAttempts) {
        for (let i = 0; i < attempts; i++) {
            try {
                return await new Promise((resolve, reject) => {
                    GM.xmlHttpRequest({
                        method: 'GET',
                        url: url,
                        onload: (response) => {
                            if (response.status === 200) {
                                resolve(response.responseText);
                            } else {
                                reject(new Error(`HTTP ${response.status}`));
                            }
                        },
                        onerror: (error) => reject(error)
                    });
                });
            } catch (error) {
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
            
            if (document.head) {
                document.head.appendChild(style);
            } else {
                // If head is not available yet, wait for it
                const observer = new MutationObserver((mutations, obs) => {
                    if (document.head) {
                        document.head.appendChild(style);
                        obs.disconnect();
                    }
                });
                
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true
                });
            }
        } catch (error) {
            console.error('Failed to apply custom styles:', error);
        }
    }

    // Function to hide comments section and share button
    function hideComments() {
        const hideElements = () => {
            // Hide Disqus iframe if present
            const disqusFrame = document.querySelector("iframe[id^='dsq-app']");
            if (disqusFrame) {
                disqusFrame.style.display = 'none';
            }

            // Hide the comments section using the specific nth-of-type selector
            const commentSection = document.querySelector("div.WdgtCn:nth-of-type(4)");
            if (commentSection) {
                commentSection.style.display = 'none';
            }

            // Hide the share button
            const shareButton = document.querySelector(".ShrCnB.fa-share-alt");
            if (shareButton) {
                shareButton.style.display = 'none';
            }
        };

        // Execute immediately if DOM is ready
        if (document.readyState !== 'loading') {
            hideElements();
        }

        // Also set up a MutationObserver to handle dynamically loaded content
        const observer = new MutationObserver((mutations) => {
            hideElements();
        });

        observer.observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    }

    // Initialize the script
    function init() {
        applyStyles().catch(console.error);
        hideComments();
    }

    // Execute script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
