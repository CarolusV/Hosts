// ==UserScript==
// @name          AnimeFLV VerPage NoWhite
// @description	  AnimeFLV VerPage NoWhite
// @author        CarolusV
// @homepage	  https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.2
// ==/UserScript==

(function() {var css = [
"h1.Title {",
  "    color: #F5FFFA !important;",
	"}",
	"",
"div.Body {",
  "    background-color: #2f353a !important;",
	"}",
	"",
"nav.Brdcrmb.fa-home {",
  "    color: #B53636 !important;",
	"}",
	"",
"div nav strong {",
  "    color: #F5FFFA !important;",
	"}",
	"",
"div nav a {",
  "    color: #F5FFFA !important;",
	"}",
	"",
"h2.SubTitle {",
  "    color: #F5FFFA !important;",
	"}",
	"",
"ul li a {",
  "    color: #F5FFFA !important;",
  "    background-color: #2f353a !important;",
	"}",
	"",
"a.CapNvNx.fa-chevron-right {",
  "    background-color: #100F0F !important;",
	"}",
	"",
"a.CapNvLs.fa-th-list {",
  "    background-color: #100F0F !important;",
	"}",
	"",
"a.CapNvPv.fa-chevron-left {",
  "    background-color: #100F0F !important;",
	"}",
	"",
"a.BtnNw.Rprt.BxSdw.fa-flag-o {",
  "    background-color: #100F0F !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",
	"a.BtnNw.CVst.BxSdw.fa-eye {",
  "    background-color: #100F0F !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",
"a.BtnNw.CVst.BxSdw.fa-eye-slash {",
  "    background-color: #100F0F !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",
"span.BtnNw.Clgt.BxSdw.lgtbx-lnk.fa-lightbulb-o {",
  "    background-color: #100F0F !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",
"i.fa-expand {",
  "    background-color: #100F0F !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",
"span.BtnNw.Dwnd.BxSdw.fa-download.AAShwHdd-lnk {",
  "    background-color: #100F0F !important;",
  "    color: #F5FFFA !important;",
	"}",
	"",
"#search-anime {",
  "    color: #F5FFFA !important;",
	"}"
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
