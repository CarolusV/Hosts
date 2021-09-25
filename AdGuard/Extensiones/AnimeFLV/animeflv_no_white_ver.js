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

(function() {var css = [div.FollowUs {\n    display: none;\n}\n\ndiv.askdvr {\n  display: none;\n}\n\na.Button.fb_login {\n  display: none;\n}\n\nfooter.Footer {\n  display: none;  \n}\n\naside a img {\n  display: none; \n}\n\ndiv.Body {\n  background-color: #2f353a;\n}\n\naside.Sidebar.BFixed {\n  background-color: #2f353a;\n  color: #2f353a;\n}\n\ndiv.Top.fa-play {\n  background-color: #2f353a;\n  color: #2f353a;\n}\n\ndiv.Bod.ScrlV.Fl.mCustomScrollbar._mCS_1.mCS_no_scrollbar {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\ndiv div strong {\n  color: #F5FFFA;\n}\n\na.fa-play-circle {\n  color: #F5FFFA;\n}\n\nmain div h2 {\n  color: #F5FFFA;\n}\n\nh3.Title {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\ndiv.Image.fa-play-circle-o {\n  background-color: #2f353a;\n}\n\nform.form-horizontal {\n  background-color: #2f353a;\n}\n\ndiv.Title {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nform label input {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nlabel.Button {\n  background-color: #2f353a;\n}\n\nform div a {\n  color: #F5FFFA;\n}\n\nh1.Title {\n  color: #F5FFFA;\n}\n\nul li a {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\ndiv nav a {\n  color: #F5FFFA;\n}\n\nh2.SubTitle {\n  color: #F5FFFA;\n}\n\na.CapNvLs.fa-th-list {\n  background-color: #2f353a;\n}\n\na.CapNvPv.fa-chevron-left {\n  background-color: #2f353a;\n}\n\na.BtnNw.Rprt.BxSdw.fa-flag-o {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\na.BtnNw.CVst.BxSdw.fa-eye {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nspan.BtnNw.Clgt.BxSdw.lgtbx-lnk.fa-lightbulb-o {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\ni.fa-expand {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nbutton.multiselect.dropdown-toggle.btn.btn-sm.btn-default {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\ndiv div h1 {\n  color: #F5FFFA;\n}\n\ndiv.filters {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nspan.multiselect-selected-text {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\n#search-anime {\n  color: #F5FFFA;\n}\n\nsection.WdgtCn {\n  background-color: #2f353a;\n}\n\nsection div p {\n  color: #F5FFFA;\n}\n\nspan.TxtAlt {\n  color: #F5FFFA;\n}\n\naside.SidebarA.BFixed {\n  background-color: #2f353a;\n}\n\ndiv figure img {\n  background-color: #2f353a;\n}\n\na.BtnNw.Pndng.BxSdw.fa-bookmark {\n  background-color: #2f353a;\n}\n\n#follow_anime {\n  background-color: #2f353a;\n}\n\n#add_favorite {\n  background-color: #2f353a;\n}\n\ndiv a span {\n  color: #F5FFFA;\n}\n\ndiv div span {\n  color: #F5FFFA;\n}\n\nul.ListImgrnd {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\ninput.form-control {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\nul.multiselect-container.genres-select.dropdown-menu {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nul.multiselect-container.year-select.dropdown-menu {\n  color: #F5FFFA;\n  background-color: #2f353a;\n}\n\nul.multiselect-container.dropdown-menu {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\n\nspan.Capi {\n  background-color: #6aa84f;\n}\n\nspan.Type.tv {\n  background-color: #1155cc;\n}\n\ndiv.CpCnC {\n  display: none;\n}\n\nsection.WdgtCn.Sm {\n  display: none;\n}\n\nspan.vtprmd {\n  background-color: #2f353a;\n}\n\ndiv.Bod.ScrlV.Fl {\n  background-color: #2f353a;\n  \n}\n\ndiv.Logo {\n  background-color: #2f353a;\n  color: #F5FFFA;\n}\ndiv.Image  {\n    background-color: #2f353a;\n	}\nbutton.btn.btn-sm.btn-primary {\n  background-color: #2f353a;\n  color: #F5FFFA;;\n}\n\ndiv.AnimeCover {\n  background-color: #2f353a;\n}\n\ndiv.ShrCnB.fa-share-alt {\n  display: none;\n}\n\ndiv.WdgtCn {\n  display: none;\n}\n\na.Active {\n  display: none;\n}].join("\n");
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
