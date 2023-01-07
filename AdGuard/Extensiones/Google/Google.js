// ==UserScript==
// @name          Google Personalizado Propio
// @description	  Google.es  Personalizado Propio
// @author        CarolusV
// @include       https://google.es/*
// @include       https://wwww.google.es/*
// @include       https://*.google.es/*
// @include       google.es/*
// @run-at        document-start
// @version       0.32
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

// When the DOM is loaded, call the applyStyles() function
document.addEventListener("DOMContentLoaded", applyStyles);

