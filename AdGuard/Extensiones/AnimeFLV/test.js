// ==UserScript==
// @name          test
// @description	  test
// @author        CarolusV
// @resource    customCSS   https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.2
// ==/UserScript==

console.debug('start: add CSS');
var cssTxt  = GM_getResourceText("customCSS");
GM_addStyle (cssTxt);
console.debug('done: add CSS');
