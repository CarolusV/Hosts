// ==UserScript==
// @name         Auto Japanese Translator
// @version      1.0
// @description  Traduce automáticamente contenido en japonés
// @author       CarolusV
// @match        *://*/*
// @grant        GM_xmlhttpRequest
// @connect      translate.googleapis.com
// ==/UserScript==

(function() {
    'use strict';

    // Cache para almacenar traducciones previas
    const translationCache = new Map();
    
    // Función para detectar texto en japonés
    function containsJapanese(text) {
        return /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/.test(text);
    }

    // Función para traducir texto usando la API de Google Translate
    async function translateText(text) {
        if (translationCache.has(text)) {
            return translationCache.get(text);
        }

        return new Promise((resolve, reject) => {
            const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=ja&tl=es&dt=t&q=${encodeURIComponent(text)}`;
            
            GM_xmlhttpRequest({
                method: 'GET',
                url: apiUrl,
                onload: function(response) {
                    try {
                        const data = JSON.parse(response.responseText);
                        const translation = data[0][0][0];
                        translationCache.set(text, translation);
                        resolve(translation);
                    } catch (error) {
                        reject(error);
                    }
                },
                onerror: reject
            });
        });
    }

    // Función para procesar un nodo de texto
    async function processTextNode(node) {
        const text = node.textContent.trim();
        if (text && containsJapanese(text)) {
            try {
                const translation = await translateText(text);
                // Crear un span con el texto original y la traducción
                const span = document.createElement('span');
                span.className = 'jp-translation';
                span.setAttribute('data-original', text);
                span.textContent = translation;
                span.title = `Original: ${text}`;
                
                // Evento para alternar entre original y traducción
                span.addEventListener('click', function() {
                    const isTranslated = span.textContent !== text;
                    span.textContent = isTranslated ? text : translation;
                });
                
                node.parentNode.replaceChild(span, node);
            } catch (error) {
                console.error('Error al traducir:', error);
            }
        }
    }

    // Función para procesar un elemento y sus hijos
    async function processElement(element) {
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        for (const node of textNodes) {
            await processTextNode(node);
        }
    }

    // Configurar el observer
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) { // ELEMENT_NODE
                    processElement(node);
                } else if (node.nodeType === 3) { // TEXT_NODE
                    processTextNode(node);
                }
            });
        });
    });

    // Iniciar la traducción y observación
    async function init() {
        // Procesar el contenido inicial
        await processElement(document.body);

        // Configurar el observer
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Agregar estilos CSS
        const style = document.createElement('style');
        style.textContent = `
            .jp-translation {
                cursor: pointer;
                border-bottom: 1px dashed #666;
            }
            .jp-translation:hover {
                background-color: #f0f0f0;
            }
        `;
        document.head.appendChild(style);
    }

    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
