// ==UserScript==
// @name          jQuery Error Patch
// @description   Patches jQuery to prevent getAttribute errors
// @match         *://*.animeflv.net/*
// @match         *://animeflv.net/*
// @run-at        document-start
// @version       1.0
// ==/UserScript==

(function() {
    'use strict';

    // Function to patch jQuery
    function patchJQuery() {
        if (window.jQuery) {
            // Store the original jQuery find and attr functions
            const originalFind = jQuery.find;
            const originalAttr = jQuery.fn.attr;

            // Patch jQuery.find to ensure valid elements
            jQuery.find = function(...args) {
                try {
                    const elements = originalFind.apply(this, args);
                    // Filter out invalid elements
                    return Array.from(elements).filter(el => el && el.nodeType === 1);
                } catch (e) {
                    console.warn('jQuery.find patched error:', e);
                    return [];
                }
            };

            // Patch jQuery.fn.attr to handle invalid elements
            jQuery.fn.attr = function(name, value) {
                try {
                    if (!this.length || !this[0] || !this[0].nodeType) {
                        return undefined;
                    }
                    return originalAttr.apply(this, arguments);
                } catch (e) {
                    console.warn('jQuery.fn.attr patched error:', e);
                    return undefined;
                }
            };

            // Patch jQuery's event handling
            const originalOn = jQuery.fn.on;
            jQuery.fn.on = function(...args) {
                try {
                    if (!this.length || !this[0] || !this[0].nodeType) {
                        return this;
                    }
                    return originalOn.apply(this, args);
                } catch (e) {
                    console.warn('jQuery.fn.on patched error:', e);
                    return this;
                }
            };

            console.log('jQuery successfully patched');
        }
    }

    // Function to wait for jQuery and apply patch
    function waitForJQuery() {
        if (typeof window.jQuery === 'undefined') {
            setTimeout(waitForJQuery, 50);
            return;
        }
        patchJQuery();
    }

    // Create a MutationObserver to watch for script additions
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes) {
                for (const node of mutation.addedNodes) {
                    if (node.tagName === 'SCRIPT') {
                        if (node.src && node.src.includes('jquery')) {
                            // jQuery script detected, prepare to patch
                            node.addEventListener('load', () => {
                                waitForJQuery();
                            });
                        }
                    }
                }
            }
        }
    });

    // Start observing before any scripts load
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });

    // Also try to patch immediately in case jQuery is already loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForJQuery);
    } else {
        waitForJQuery();
    }

    // Cleanup function
    function cleanup() {
        observer.disconnect();
    }

    // Cleanup when page unloads
    window.addEventListener('unload', cleanup);
})();
