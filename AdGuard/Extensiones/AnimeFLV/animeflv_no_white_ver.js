// ==UserScript==
// @name          AnimeFLV VerPage NoWhite
// @description	  AnimeFLV VerPage NoWhite
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.32
// ==/UserScript==

function applyExternalCss(url) {
  // Crear un elemento <link> para incluir el archivo CSS externo
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;

  // Agregar el elemento <link> al <head> de la página
  document.getElementsByTagName("head")[0].appendChild(link);
}

// Cuando se cargue el DOM, llamar a la función applyExternalCss()
document.addEventListener("DOMContentLoaded", function() {
  applyExternalCss("https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css");
});
