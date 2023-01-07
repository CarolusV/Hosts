// ==UserScript==
// @name         CSGO Float Checker
// @version      0.40
// @description  Check CSGO skins's Float in the market
// @author       ----
// @connect      api.csgofloat.com
// @include      http*://steamcommunity.com/market/listings/730/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

// Añade un listener al evento "DOMContentLoaded"
document.addEventListener("DOMContentLoaded", function(event) {
  function c() {
      // Obtiene todos los elementos con la clase "market_actionmenu_button"
      var items = document.getElementsByClassName("market_actionmenu_button");
      var ids = [];
      for (let i=0;i<items.length;i++)
          ids.push(items[i].id);
      // Obtiene todos los elementos con la clase "market_listing_item_name_block"
      var buttons = document.getElementsByClassName("market_listing_item_name_block");
      // Crea un array de objetos para almacenar la información de cada elemento
      var elements = [];
      for(let i = 0; i < buttons.length-1; i++) {
          let node = document.createElement("a");
          node.innerText = "check it!";
          node.setAttribute("class", "btn_green_white_innerfade btn_medium market_noncommodity_buyorder_button");
          node.style = "line-height: 20px;font-size: 10px;width:200px;text-align:center";
          buttons[i].appendChild(node);
          // Almacena la información del elemento en el array
          elements.push({
              float: 0, // Valor float del elemento (se actualizará más tarde)
              node: buttons[i] // Nodo del elemento en el DOM
          });
      }
      // Obtiene el valor float de cada elemento y lo almacena en el array
      for (let i = 0; i < elements.length; i++) {
          let float = getFloat(elements[i].node);
          elements[i].float = float;
      }
      // Ordena el array de elementos de menor a mayor float
      elements.sort(function(a, b) {
          return a.float - b.float;
      });
      // Añade los elementos ordenados al DOM
      for (let i = 0; i < elements.length; i++) {
          document.getElementById("market_buyorder_info").
          document.getElementById("market_buyorder_info").childNodes[1].childNodes[1].appendChild(elements[i].node);
      }
  }

  // Función para obtener el valor float de un elemento
  function getFloat(node) {
      // Obtiene el enlace del elemento
      let link = node.getElementsByTagName("a")[0].href;
      // Hace una solicitud GET a la API de CSGO Float
      GM_xmlhttpRequest({
          method: 'GET',
          url: 'https://api.csgofloat.com/?url=' + link,
          onload: response => {
              response = JSON.parse(response.response);
              // Devuelve el valor float del elemento
              return response.iteminfo.floatvalue;
          }
      });
  }

  c();
});


