Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@CarolusV 
CarolusV
/
Hosts
0
10
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Hosts/AdGuard/Extensiones/AnimeFLV/animeflv_no_white_ver.js /
@CarolusV
CarolusV Update animeflv_no_white_ver.js
Latest commit 3ac20f4 13 hours ago
 History
 1 contributor
224 lines (223 sloc)  4.88 KB
  
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
	"main div h2 {",
"    color: #F5FFFA !important;",
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
"h3.Title {",
"    color: #F5FFFA !important;",
	"}",
	"",
"span.Type.tv {",
"    background-color: #ECDE26 !important;",
"    color: #2f353a !important;",
	"}",
	"",
"span.Type.ova {",
"    color: #2f353a !important;",
"    background-color: #F19B11 !important;",
	"}",
	"",
"span.Capi {",
"    background-color: #4AAB45 !important;",
	"}",
	"",
"div.Image.fa-play-circle-o {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div.AnimeCover {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div.Title {",
"    background-color: #2f353a !important;",
"    color: #F5FFFA !important;",
	"}",
	"",
"section.WdgtCn {",
"    background-color: #2f353a !important;",
	"}",
	"",
"li a span {",
"    background-color: #2f353a !important;",
"    color: #F5FFFA !important;",
	"}",
	"",
"a.BtnNw.AdFv.BxSdw.fa-heart {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div a span {",
"    background-color: #2f353a !important;",
"    color: #F5FFFA !important;",
	"}",
	"",
"a.BtnNw.Pndng.BxSdw.fa-bookmark {",
"    background-color: #2f353a !important;",
	"}",
	"",
"a.BtnNw.Fllw.B.BxSdw.fa-thumbs-o-down {",
"    color: #F5FFFA !important;",
	"}",
	"",
"section div p {",
"    color: #F5FFFA !important;",
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
"span.Stts {",
"    color: #F5FFFA !important;",
	"}",
	"",
"label.checkbox {",
"    color: #2f353a !important;",
"    background-color: #E82F2F !important;",
	"}",
	"",
"label.radio {",
"    color: #2f353a !important;",
	"}",
	"",
"input.form-control {",
"    color: #F5FFFA !important;",
"    background-color: #2f353a !important;",
	"}",
	"",
"span.Estreno {",
"    display: none !important;",
	"}",
	"",
"form.form-horizontal  {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div div p  {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div.Description  {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div.Wdgt.User  {",
"    background-color: #2f353a !important;",
	"}",
	"",
"article.Anime.alt  {",
"    background-color: #2f353a !important;",
	"}",
	"",
"article h3 a  {",
"    background-color: #2f353a !important;",
	"}",
	"",
"div.Image  {",
"    background-color: #2f353a !important;",
	"}",
	"",	
"a.Active {",
"    display: none !important;",
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
