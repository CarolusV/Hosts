// ==UserScript==
// @name         Bloqueador de Pestañas Específicas
// @version      1.2
// @description  Bloquea nuevas pestañas de dominios específicos
// @author       CarolusV
// @match        https://fhd.seriesturcastv.to/*
// @run-at       document-start
// ==/UserScript==


(function() {
    'use strict';

    const blockedDomains = [
        'ak.ptailadsol.net',
        'clunkyentirelinked.com'
    ];

    // Prevenir window.open
    const originalWindowOpen = window.open;
    window.open = function(url, target, features) {
        if (!url) return null;
        if (blockedDomains.some(domain => url.includes(domain))) {
            console.log('Bloqueado intento de abrir:', url);
            return null;
        }
        return originalWindowOpen.call(this, url, target, features);
    };

    // Prevenir location.href y location.assign
    const originalAssign = window.location.assign;
    window.location.assign = function(url) {
        if (blockedDomains.some(domain => url.includes(domain))) {
            console.log('Bloqueado intento de redirección:', url);
            return;
        }
        return originalAssign.call(this, url);
    };

    const originalReplace = window.location.replace;
    window.location.replace = function(url) {
        if (blockedDomains.some(domain => url.includes(domain))) {
            console.log('Bloqueado intento de reemplazo:', url);
            return;
        }
        return originalReplace.call(this, url);
    };

    // Bloquear clicks que abran nuevas pestañas
    document.addEventListener('click', function(e) {
        let element = e.target;
        
        // Buscar el enlace más cercano (en caso de que se haga clic en un elemento dentro de un enlace)
        while (element && element.tagName !== 'A') {
            element = element.parentElement;
        }
        
        if (element && element.tagName === 'A') {
            const href = element.href || '';
            if (blockedDomains.some(domain => href.includes(domain))) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('Bloqueado clic en:', href);
                return false;
            }
        }
    }, true);

    // Remover event listeners que puedan abrir nuevas pestañas
    window.addEventListener('load', function() {
        const elements = document.getElementsByTagName('*');
        for (let element of elements) {
            const clone = element.cloneNode(true);
            element.parentNode.replaceChild(clone, element);
        }
    });

    // Bloquear postMessage
    window.addEventListener('message', function(e) {
        if (blockedDomains.some(domain => e.origin.includes(domain))) {
            e.stopPropagation();
            return;
        }
    }, true);

    // Prevenir redirecciones por JavaScript
    Object.defineProperty(window, 'location', {
        get: function() {
            return window.location;
        },
        set: function(href) {
            if (blockedDomains.some(domain => href.includes(domain))) {
                console.log('Bloqueado intento de redirección por location:', href);
                return;
            }
            window.location.href = href;
        }
    });
})();
