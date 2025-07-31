// ==UserScript==
// @name        Redirect m.animeflv.net to www3.animeflv.net
// @description Automatically redirects mobile AnimeFlv to desktop version
// @match       https://m.animeflv.net/*
// @version     1.7.1
// @grant       none
// @noframes
// @run-at      document-start
// ==/UserScript==

(function() {
    'use strict';

    // Execute redirect as early as possible
    if (window.location.hostname === 'm.animeflv.net') {
        const newUrl = window.location.href.replace('m.animeflv.net', 'www3.animeflv.net');
        window.location.replace(newUrl);
        return; // Exit early since we're redirecting
    }

    // Handle dynamically added links only if we didn't redirect
    function handleDynamicLinks() {
        // Create a single listener for all link clicks using event delegation
        document.body.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            if (link && link.href && link.href.includes('m.animeflv.net')) {
                e.preventDefault();
                e.stopPropagation();
                const newUrl = link.href.replace('m.animeflv.net', 'www3.animeflv.net');
                window.location.href = newUrl;
            }
        });
    }

    // Wait for DOM to be ready before adding event listeners
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleDynamicLinks);
    } else {
        // DOM is already ready
        handleDynamicLinks();
    }

})();
