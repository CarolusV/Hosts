// ==UserScript==
// @name         Bloqueador de Pestañas Específicas
// @version      1.0
// @description  Bloquea nuevas pestañas de dominios específicos
// @author       CarolusV
// @match        https://fhd.seriesturcastv.to/*
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    // Lista de dominios a bloquear
    const blockedDomains = [
        'ak.ptailadsol.net',
        'clunkyentirelinked.com'
    ];

    // Reemplazar window.open
    const originalWindowOpen = window.open;
    window.open = function(url, ...args) {
        if (url && blockedDomains.some(domain => url.includes(domain))) {
            console.log('Bloqueada nueva pestaña:', url);
            return null;
        }
        return originalWindowOpen.apply(this, [url, ...args]);
    };

    // Bloquear clicks que intenten abrir estos dominios
    document.addEventListener('click', function(e) {
        let target = e.target;
        while (target) {
            if (target.tagName === 'A' && target.href) {
                if (blockedDomains.some(domain => target.href.includes(domain))) {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Click bloqueado:', target.href);
                    return false;
                }
            }
            target = target.parentElement;
        }
    }, true);

})();
