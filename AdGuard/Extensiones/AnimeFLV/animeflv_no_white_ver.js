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
// ==/UserScript==

function OcultarComentarios() {
  // Select the iframe using the CSS selector "iframe[id^='dsq-app']"
  //var iframe = document.querySelector("iframe[id^='dsq-app']");
  // Set the display property to "none" to hide the iframe
  //iframe.style.display = "none";
  
  var sections = document.querySelectorAll("section.WdgtCn");

  // Check if there are at least three elements
  if (sections.length >= 3) {
    // Get the third element
    var thirdSection = sections.item(3);

    // Set the display property to "none" to hide the third section
    thirdSection.style.display = "none";
  }
}

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

  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
  OcultarComentarios();
});
