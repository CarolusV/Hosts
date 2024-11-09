// ==UserScript==
// @name         Series Turcas TV - Bloqueador Simple de Pop-ups
// @version      1.0
// @description  Bloquea todos los pop-ups en Series Turcas TV
// @author       CarolusV
// @match        https://fhd.seriesturcastv.to/*

// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    // Sobrescribir window.open
    window.open = function() { return null; };
    
    // Sobrescribir window.opener
    Object.defineProperty(window, 'opener', {
        value: null,
        writable: false
    });
    
    // Bloquear eventos de click que intenten abrir ventanas
    document.addEventListener('click', function(e) {
        e.stopPropagation();
        const target = e.target;
        if (target.tagName === 'A' && target.target === '_blank') {
            e.preventDefault();
        }
    }, true);
})();
