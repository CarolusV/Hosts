// ==UserScript==
// @name          Simple Dark Reader
// @description	  Simple Dark Reader
// @author        CarolusV
// @homepage	    
// @include       
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
  applyExternalCss("https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/Simple_DarkTheme/dark_theme.css");
});

