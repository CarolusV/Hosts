// ==UserScript==
// @name          AnimeFLV VerPage NoWhite
// @description	  AnimeFLV VerPage NoWhite
// @author        CarolusV
// @homepage	    https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @include       https://www3.animeflv.net/*
// @include       www3.animeflv.net/*
// @include       animeflv.net/*
// @run-at        document-start
// @version       0.42
// @version       0.43
// ==/UserScript==

function applyStyles() {
  // Create a style element
  var style = document.createElement("style");

  fetch('https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css')
    .then(response => response.text())
    .then(css => {
      // Set the text content of the style element
      style.textContent = css;
      // Append the style element to the head of the page
      document.getElementsByTagName("head")[0].appendChild(style);
    });
}

// Llamar a la función applyStyles() antes de que el DOM esté completamente cargado
  applyStyles();

  // Cuando se cargue el DOM, llamar a la función applyExternalCss()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
});
