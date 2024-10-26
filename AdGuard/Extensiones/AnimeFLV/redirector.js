// ==UserScript==
// @name        Redirect m.animeflv.net to www3.animeflv.net
// @description Automatically redirects mobile AnimeFlv to desktop version
// @match       https://m.animeflv.net/*
// @version     1.5.0
// @grant       none
// @noframes
// @run-at      document-start
// ==/UserScript==

// Execute redirect as early as possible
if (window.location.hostname === 'm.animeflv.net') {
    window.location.replace(window.location.href.replace('m.animeflv.net', 'www3.animeflv.net'));
}

// Handle dynamically added links
document.addEventListener('DOMContentLoaded', () => {
    // Create a single listener for all link clicks using event delegation
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.href.includes('m.animeflv.net')) {
            e.preventDefault();
            window.location.href = link.href.replace('m.animeflv.net', 'www3.animeflv.net');
        }
    });
});
