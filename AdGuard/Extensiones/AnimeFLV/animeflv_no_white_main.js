// ==UserScript==
// @name          AnimeFLV MainPage NoWhite
// @description	  AnimeFLV MainPage NoWhite
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_main.js
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.2
// ==/UserScript==

(function() {var css = [
"div.Body {",
  "    background-color: #2f353a !important;",
	"}",
	"",

"aside.Sidebar.BFixed {",
  "    background-color: #2f353a !important;",
	"}",
	"",

"div.Bod.ScrlV.Fl.mCustomScrollbar._mCS_1.mCS_no_scrollbar {",
  "    background-color: #2f353a !important;",
	"}",
	"",

"div.Top.fa-play {",
  "    background-color: #2f353a !important;",
	"}",
	"",

"div div strong {",
  "    color: #F5FFFA !important;",
	"}",
	"",

"main div h2 {",
  "    color: #F5FFFA !important;",
	"}",
	"",

"h3.Title {",
  "    color: #F5FFFA !important;",
	"}",
	"",

"a.fa-play-circle {",
  "    color: #F5FFFA !important;",
	"}",
	"",

"div.Bot.hidden-xs.hidden-sm {",
  "    background-color: #2f353a !important;",
  
	"}",
	"",

"div.tab-content.AnTbCnTp {",
  "    background-color: #2f353a !important;",
	"}"
	"",
	
"div.Image.fa-play-circle-o {",
  "    background-color: #2f353a !important;",
	"}",
	"",

"button.multiselect.dropdown-toggle.btn.btn-sm.btn-default {",
  "    background-color: #2f353a !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",

"div div h1 {",
  "    color: #F5FFFA !important;",
	"}",
	"",

"ul li a {",
  "    color: #F5FFFA !important;",
  "    background-color: #2f353a !important;",
	"}",
	"",

"ul li span {",
  "    background-color: #2f353a !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",

"span.Estreno {",
  "    background-color: #8A903E !important;",
	"}",

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

