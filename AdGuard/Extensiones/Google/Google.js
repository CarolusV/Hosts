// ==UserScript==
// @name          Google Personalizado Propio
// @description	  Google.es  Personalizado Propio
// @author        CarolusV
// @include       https://google.es/*
// @include       https://wwww.google.es/*
// @include       https://*.google.es/*
// @include       google.es/*
// @run-at        document-start
// @version       0.34
// ==/UserScript==

function applyStyles() {
  // Create a style element
  var style = document.createElement("style");

  fetch('https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/Google/css.css')
    .then(response => response.text())
    .then(css => {
      // Set the text content of the style element
      style.textContent = css;
      // Append the style element to the head of the page
      document.getElementsByTagName("head")[0].appendChild(style);
    });
}

  function makeElementsTransparent() {
// Estilo de fondo a aplicar
    const backgroundStyle = 'background-color: #00000000 !important;';

    // Función para verificar si una clase contiene las palabras "gb_" y "gb_"
    function hasTargetClass(classString) {
        return /\bgb_/.test(classString);
    }

    // Función para agregar el estilo de fondo a un elemento
    function addBackgroundStyle(element) {
        element.style.cssText += backgroundStyle;
    }

    // Obtener todos los elementos en la página
    const allElements = document.querySelectorAll('*');

    // Iterar sobre los elementos y aplicar el estilo si contienen las clases deseadas
    allElements.forEach(element => {
        const elementClasses = element.getAttribute('class') || '';
        if (hasTargetClass(elementClasses)) {
            addBackgroundStyle(element);
        }
    });
  }

  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
  makeElementsTransparent();
});
