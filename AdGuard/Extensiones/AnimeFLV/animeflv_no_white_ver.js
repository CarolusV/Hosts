// ==UserScript==
// @name          AnimeFLV VerPage NoWhite NoComents
// @description	  AnimeFLV VerPage NoWhite NoComents
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.33
// ==/UserScript==

var enlace_css="https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css"

function applyExternalCss(url) {
  // Crear un elemento <link> para incluir el archivo CSS externo
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;

  // Agregar el elemento <link> al <head> de la página
  document.getElementsByTagName("head")[0].appendChild(link);
}

function OcultarComentarios() {
  // Select the iframe using the CSS selector "iframe[id^='dsq-app']"
  var iframe = document.querySelector("iframe[id^='dsq-app']");
  // Set the display property to "none" to hide the iframe
  iframe.style.display = "none";
  
  var sections = document.querySelectorAll("section.WdgtCn");

  // Check if there are at least three elements
  if (sections.length >= 3) {
    // Get the third element
    var thirdSection = sections.item(3);

    // Set the display property to "none" to hide the third section
    thirdSection.style.display = "none";
  }
}

  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyExternalCss(enlace_css);
  OcultarComentarios();
});




