// ==UserScript==
// @name          AnimeFLV VerPage NoWhite
// @description	  AnimeFLV VerPage NoWhite
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       www3.animeflv.net
// @resource      IMPORTED_CSS https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css
// @include       animeflv.net
// @run-at        document-start
// @version       0.3.3
// ==/UserScript==

if (typeof GM_addStyle != "undefined") {
	GM_addStyle(IMPORTED_CSS);} 
	else if (typeof PRO_addStyle != "undefined"){
	PRO_addStyle(IMPORTED_CSS);} 
	else if (typeof addStyle != "undefined"){
	addStyle(IMPORTED_CSS);} 
	else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(IMPORTED_CSS));
	var heads = document.getElementsByTagName("head");
		if (heads.length > 0){
			heads[0].appendChild(node);} 
			else {
			// no head yet, stick it whereever
			document.documentElement.appendChild(node);}
	}
