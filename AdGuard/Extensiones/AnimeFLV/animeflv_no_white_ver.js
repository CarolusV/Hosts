// ==UserScript==
// @name          AnimeFLV VerPage NoWhite
// @description	  AnimeFLV VerPage NoWhite
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.3
// @resource      IMPORTED_CSS https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css
// @grant         GM_getResourceText
// @grant         GM_addStyle
/// ==/UserScript==

(function() {
    'use strict';
    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);
});
