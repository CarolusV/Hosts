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

(function() {var css = ("
div.Body {
  background-color: #2f353a;
}

aside.Sidebar.BFixed {
  background-color: #2f353a;
}

div.Bod.ScrlV.Fl.mCustomScrollbar._mCS_1.mCS_no_scrollbar {
  background-color: #2f353a;
}

div.Top.fa-play {
  background-color: #2f353a;
}

div div strong {
  color: #F5FFFA;
}

main div h2 {
  color: #F5FFFA;
}

h3.Title {
  color: #F5FFFA;
}

a.fa-play-circle {
  color: #F5FFFA;
}

div.Bot.hidden-xs.hidden-sm {
  background-color: #2f353a;
}

div.tab-content.AnTbCnTp {
  background-color: #2f353a;;
}

div.Image.fa-play-circle-o {
  background-color: #2f353a;
}

button.multiselect.dropdown-toggle.btn.btn-sm.btn-default {
  background-color: #2f353a;
  color: #F5FFFA;
}

div div h1 {
  color: #F5FFFA;;
}

ul li a {
  color: #F5FFFA;
  background-color: #2f353a;;
}

ul li span {
  background-color: #2f353a;
  color: #F5FFFA;
}

span.Estreno {
  background-color: #8A903E;
}

section.WdgtCn {
  background-color: #2f353a;
}

input.form-control {
  background-color: #2f353a;
  color: #F5FFFA;
}

a.BtnNw.Pndng.BxSdw.fa-bookmark {
  background-color: #2f353a;
}

section div p {
  color: #F5FFFA;
}

section nav a {
  color: #F5FFFA;
  background-color: #100F0F;;
}

a.BtnNw.Fllw.BxSdw.fa-check {
  background-color: #2f353a;
  color: #F5FFFA;
}

#add_favorite {
  background-color: #2f353a;
}

div figure img {
  background-color: #2f353a;
}

div.Title {
  color: #F5FFFA;
}

div a span {
  color: #F5FFFA;
}

a.BtnNw.AdFv.BxSdw.fa-heart {
  color: #F5FFFA;
  background-color: #2f353a;
}

li a span {
  background-color: #2f353a;
}

label.Button {
  background-color: #2f353a;
  }").join("\n");
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

