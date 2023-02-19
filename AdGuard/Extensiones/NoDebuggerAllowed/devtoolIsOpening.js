// ==UserScript==
// @name         Block DevtoolIsOpening
// @version      1.1
// @description  Block devtoolIsOpening() from running on the current page
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if devtoolIsOpening() function exists on the current page
    if (typeof devtoolIsOpening === 'function') {
        // Intercept and replace the devtoolIsOpening function with a dummy function
        window.devtoolIsOpening = function() {};
    }
})();
