// ==UserScript==
// @name          Google Personalizado Propio
// @description	  Google.es  Personalizado Propio
// @author        CarolusV
// @include       https://google.es/*
// @include       https://*.google.es/*
// @include       google.es/*
// @run-at        document-start
// @version       0.21
// ==/UserScript==
//vieja https://images7.alphacoders.com/333/thumb-1920-333580.jpg
function applyStyles() {
  // Create a style element
  var style = document.createElement("style");

  // Set the text content of the style element
  style.textContent = `
	.L3eUgb {
	    background: url(https://images5.alphacoders.com/121/1217672.jpg) center center !important;
	    background-size: cover !important;
	}
	.o3j99 {
	    background: transparent !important;
	}

  `;

  // Append the style element to the head of the page
  document.getElementsByTagName("head")[0].appendChild(style);
}


  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
});
