// ==UserScript==
// @name          Google Personalizado Propio
// @description	  Google.es  Personalizado Propio
// @author        CarolusV
// @include       https://google.es/*
// @include       https://*.google.es/*
// @include       google.es/*
// @run-at        document-start
// @version       0.2
// ==/UserScript==
(function() {var css = [
	".L3eUgb {",
	"    background: url(https://images7.alphacoders.com/333/thumb-1920-333580.jpg) center center !important;",
	"    background-size: cover !important;",
	"}",
	".o3j99 {",
	"    background: transparent !important;",
	"}",
	"",

].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
