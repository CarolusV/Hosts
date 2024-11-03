// ==UserScript==
// @name         Block Disqus and Comments
// @version      1.02
// @description  Elimina y bloquea Disqus, comentarios y elementos de reporte
// @author       CarolusV
// @match         *://*.animeflv.net/ver/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Bloquear scripts de Disqus
    const observer = new MutationObserver(() => {
        const disqusScripts = document.querySelectorAll('script[src*="disqus.com"]');
        disqusScripts.forEach(script => script.remove());
    });

    observer.observe(document, { childList: true, subtree: true });

    // Eliminar elementos relacionados con comentarios, Disqus y reportes
    function removeElementsBySelectors(selectors) {
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => element.remove());
        });
    }

    // Ejecutar el proceso de eliminación de elementos en la carga de la página y cambios
    function removeCommentsAndReports() {
        removeElementsBySelectors([
            '[id*="disqus"]',          // Contenedores relacionados con Disqus
            '[class*="comment"]',      // Clases con comentarios
            '[id*="comment"]',         // IDs con comentarios
            '[class*="report"]',       // Clases con reportes
            '[id*="report"]',          // IDs con reportes
            '[data-disqus-identifier]' // Atributos que indican widgets de Disqus
        ]);
    }

    // Ejecutar inicialmente
    removeCommentsAndReports();

    // Observador para detectar cambios dinámicos en la página
    const config = { childList: true, subtree: true };
    const mutationObserver = new MutationObserver(() => removeCommentsAndReports());
    mutationObserver.observe(document.body, config);
})();
