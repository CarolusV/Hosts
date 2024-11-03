// ==UserScript==
// @name         Allow Only User-Initiated Clicks
// @version      1.0
// @description  Permite solo los clics iniciados por el usuario para evitar marcar capítulos automáticamente.
// @author       CarolusV
// @match         *://*.animeflv.net/ver/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Intercepta todos los eventos de clic en la página
    document.addEventListener('click', function(event) {
        // Verifica si el clic fue iniciado por el usuario (isTrusted)
        if (!event.isTrusted) {
            // Previene la acción si el clic no fue iniciado por el usuario
            event.stopPropagation();
            event.preventDefault();
            console.log('Clic bloqueado: no fue iniciado por el usuario.');
        } else {
            console.log('Clic permitido: iniciado por el usuario.');
        }
    }, true); // Captura el evento en la fase de captura
})();
