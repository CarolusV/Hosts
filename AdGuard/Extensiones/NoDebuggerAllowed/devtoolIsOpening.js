// ==UserScript==
// @name         Block DevtoolIsOpening
// @version      1.0
// @description  Block devtoolIsOpening() from running on the current page
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Intercept and replace the devtoolIsOpening function with a dummy function
    window.devtoolIsOpening = function() {};
})();
