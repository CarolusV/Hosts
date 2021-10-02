// ==UserScript==
// @name          test
// @description	  test
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.2
// ==/UserScript==

console.debug('start: add CSS');
GM_xmlhttpRequest({
  method: "GET",
  url: "https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css",
  onload: function(response) {
    var css = response.responseText;
    GM_addStyle(css);
    console.debug('done: add ' + css);
  }
});
