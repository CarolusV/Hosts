// ==UserScript==
// @name          Google Personalizado Propio
// @description	  Google.es  Personalizado Propio
// @author        CarolusV
// @include       https://google.es/*
// @include       https://*.google.es/*
// @include       google.es/*
// @run-at        document-start
// @version       0.29
// ==/UserScript==
//vieja https://images7.alphacoders.com/333/thumb-1920-333580.jpg
function applyStyles() {
  // Create a style element
  var style = document.createElement("style");
  var estilos_css="";
	
  fetch('https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/Google/css.css')
	  .then(response => response.text())
	  .then(estilos_css => {
	    // aquí puedes usar la variable "css" para almacenar el contenido del archivo CSS
	    // Set the text content of the style element
  	    style.textContent = estilos_css;
	  });


  // Append the style element to the head of the page
  document.getElementsByTagName("head")[0].appendChild(style);
}


  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
});
