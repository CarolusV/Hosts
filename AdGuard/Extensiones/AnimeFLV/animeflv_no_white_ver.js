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
// @version       0.35
// ==/UserScript==

function applyStyles() {
  // Create a style element
  var style = document.createElement("style");

  // Set the text content of the style element
  style.textContent = `
    
div.FollowUs {
    display: none !important;
	display: none!important;
}

div.askdvr {
  display: none !important;
	display: none!important;
}

a.Button.fb_login {
  display: none !important;
	display: none!important;
}

footer.Footer {
  display: none !important;  
	display: none!important;
}

aside a img {
  display: none !important; 
	display: none!important;
}

div.Body {
  background-color: #2f353a !important;
	background - color: #2f353a !important;
}

aside.Sidebar.BFixed {
  background-color: #2f353a !important;
  color: #2f353a !important;
  background-color: # 2 f353a!important;
	color: #2f353a !important;
}

div.Top.fa-play {
  background-color: #2f353a !important;
  color: #2f353a !important;
  background-color: # 2 f353a!important;
	color: #2f353a !important;
}

div.Bod.ScrlV.Fl.mCustomScrollbar._mCS_1.mCS_no_scrollbar {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
  background-color: # 2 f353a!important;
	color: #F5FFFA!important;
}

div div strong {
  color: #F5FFFA !important;
	color: #F5FFFA!important;
}

a.fa-play-circle {
  color: #F5FFFA !important;
a.fa - play - circle {
	color: #F5FFFA!important;
}

main div h2 {
  color: #F5FFFA !important;
	color: #F5FFFA!important;
}

h3.Title {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
	color: #F5FFFA!important;
	background - color: #2f353a !important;
}

div.Image.fa-play-circle-o {
  background-color: #2f353a !important;
  background-color: # 2 f353a!important;
}

form.form-horizontal {
  background-color: #2f353a !important;
form.form - horizontal {
	background - color: #2f353a !important;
}

div.Title {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
  background-color: # 2 f353a!important;
	color: #F5FFFA!important;
}

form label input {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
	background - color: #2f353a !important;
  color: # F5FFFA!important;
}

label.Button {
  background-color: #2f353a !important;
	background - color: #2f353a !important;
}

form div a {
  color: #F5FFFA !important;
  color: # F5FFFA!important;
}

h1.Title {
  color: #F5FFFA !important;
	color: #F5FFFA!important;
}

ul li a {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
	color: #F5FFFA!important;
	background - color: #2f353a !important;
}

div nav a {
  color: #F5FFFA !important;
  color: # F5FFFA!important;
}

h2.SubTitle {
  color: #F5FFFA !important;
	color: #F5FFFA!important;
}

a.CapNvLs.fa-th-list {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
a.CapNvLs.fa - th - list {
	background - color: #2f353a !important;
  color: # F5FFFA!important;
}

a.CapNvPv.fa-chevron-left {
  background-color: #2f353a !important;
a.CapNvPv.fa - chevron - left {
	background - color: #2f353a !important;
}

a.BtnNw.Rprt.BxSdw.fa-flag-o {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
  background-color: # 2 f353a!important;
	color: #F5FFFA!important;
}

a.BtnNw.CVst.BxSdw.fa-eye {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
a.BtnNw.CVst.BxSdw.fa - eye {
	background - color: #2f353a !important;
  color: # F5FFFA!important;
}

span.BtnNw.Clgt.BxSdw.lgtbx-lnk.fa-lightbulb-o {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
span.BtnNw.Clgt.BxSdw.lgtbx - lnk.fa - lightbulb - o {
	background - color: #2f353a !important;
  color: # F5FFFA!important;
}

i.fa-expand {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
i.fa - expand {
	background - color: #2f353a !important;
  color: # F5FFFA!important;
}

button.multiselect.dropdown-toggle.btn.btn-sm.btn-default {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
button.multiselect.dropdown - toggle.btn.btn - sm.btn -
	default {
		color: #F5FFFA!important;
		background - color: #2f353a !important;
}

div div h1 {
  color: #F5FFFA !important;
}
  color: # F5FFFA!important;
	}

div.filters {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
	background - color: #2f353a !important;
  color: # F5FFFA!important;
}

span.multiselect-selected-text {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
span.multiselect - selected - text {
		color: #F5FFFA!important;
		background - color: #2f353a !important;
}

#search-anime {
  color: #F5FFFA !important;
}
# search - anime {
			color: #F5FFFA!important;
		}

section.WdgtCn {
  background-color: #2f353a !important;
		section.WdgtCn {
			background - color: #2f353a !important;
}

section div p {
  color: #F5FFFA !important;
}
  color: # F5FFFA!important;
		}

span.TxtAlt {
  color: #F5FFFA !important;
}
		span.TxtAlt {
			color: #F5FFFA!important;
		}

aside.SidebarA.BFixed {
  background-color: #2f353a !important;
		aside.SidebarA.BFixed {
			background - color: #2f353a !important;
}

div figure img {
  background-color: #2f353a !important;
}
  background-color: # 2 f353a!important;
		}

a.BtnNw.Pndng.BxSdw.fa-bookmark {
  background-color: #2f353a !important;
		a.BtnNw.Pndng.BxSdw.fa - bookmark {
			background - color: #2f353a !important;
}

#follow_anime {
  background-color: #2f353a !important;
# follow_anime {
					background - color: #2f353a !important;
}

#add_favorite {
  background-color: #2f353a !important;
# add_favorite {
						background - color: #2f353a !important;
}

div a span {
  color: #F5FFFA !important;
}
  color: # F5FFFA!important;
					}

div div span {
  color: #F5FFFA !important;
}
					div div span {
						color: #F5FFFA!important;
					}

ul.ListImgrnd {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
					ul.ListImgrnd {
						color: #F5FFFA!important;
						background - color: #2f353a !important;
}

input.form-control {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
  color: # F5FFFA!important;
						background - color: #2f353a !important;
}

ul.multiselect-container.genres-select.dropdown-menu {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
}
  background-color: # 2 f353a!important;
						color: #F5FFFA!important;
					}

ul.multiselect-container.year-select.dropdown-menu {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
					ul.multiselect - container.year - select.dropdown - menu {
						color: #F5FFFA!important;
						background - color: #2f353a !important;
}

ul.multiselect-container.dropdown-menu {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
}
  background-color: # 2 f353a!important;
						color: #F5FFFA!important;
					}

span.Capi {
  background-color: #6aa84f !important;
					span.Capi {
						background - color: #6aa84f !important;
}

span.Type.tv {
  background-color: #1155cc !important;
}
  background-color: # 1155 cc!important;
					}

div.CpCnC {
  display: none !important;
}
					div.CpCnC {
						display: none!important;
					}

section.WdgtCn.Sm {
  display: none !important;
}
					section.WdgtCn.Sm {
						display: none!important;
					}

span.vtprmd {
  background-color: #2f353a !important;
					span.vtprmd {
						background - color: #2f353a !important;
}

div.Bod.ScrlV.Fl {
  background-color: #2f353a !important;

}
  background-color: # 2 f353a!important;

div.Logo {
  background-color: #2f353a !important;
  color: #F5FFFA !important;
}
div.Image  {
    background-color: #2f353a !important;
					}

					div.Logo {
						background - color: #2f353a !important;
  color: # F5FFFA!important;
					}
					div.Image {
						background - color: #2f353a !important;
	}
button.btn.btn-sm.btn-primary {
  background-color: #2f353a !important;
  color: #F5FFFA !important; !important;
}
  background-color: # 2 f353a!important;
						color: #F5FFFA!important;
						!important;
					}

div.AnimeCover {
  background-color: #2f353a !important;
					div.AnimeCover {
						background - color: #2f353a !important;
}

div.ShrCnB.fa-share-alt {
@@ -269,46 +270,46 @@ a.Active {
}

a.BtnNw.CVst.BxSdw.fa-eye-slash {
  background-color: #2f353a !important;
  color: #e06666 !important;
  
}
  background-color: # 2 f353a!important;
						color: #e06666!important;

					}

a.BtnNw.Pndng.BxSdw.fa-times {
  color: #F5FFFA !important;
  background-color: #2f353a !important;
					a.BtnNw.Pndng.BxSdw.fa - times {
						color: #F5FFFA!important;
						background - color: #2f353a !important;
}

a.Button.Sm {
  background-color: #1155cc !important;
  color: #F5FFFA !important;
}
  background-color: # 1155 cc!important;
						color: #F5FFFA!important;
					}

ul.ListUser {
  background-color: #2f353a !important;
					ul.ListUser {
						background - color: #2f353a !important;
}

div.Description {
  background-color: #2f353a !important;
  color: #F5FFFA !important;  
}

a.Button.StylC.ShwMr.Alt {
 color: #2f353a !important;
   background-color: #F5FFFA !important; 
}

a.Pndnt.fa-bookmark {
   color: #2f353a !important;
   background-color: #F5FFFA !important; 
}

a.AnmQv.fa-play {
     color: #2f353a !important;
   background-color: #F5FFFA !important; 
}

div.DpdwCnt.TtCn {
    background-color: #2f353a !important;
    color: #F5FFFA !important;
}
  background-color: # 2 f353a!important;
						color: #F5FFFA!important;
					}

					a.Button.StylC.ShwMr.Alt {
						color: #2f353a !important;
   background-color: # F5FFFA!important;
					}

					a.Pndnt.fa - bookmark {
						color: #2f353a !important;
   background-color: # F5FFFA!important;
					}

					a.AnmQv.fa - play {
						color: #2f353a !important;
   background-color: # F5FFFA!important;
					}

					div.DpdwCnt.TtCn {
						background - color: #2f353a !important;
    color: # F5FFFA!important;
					}
  `;

  // Append the style element to the head of the page
  document.getElementsByTagName("head")[0].appendChild(style);
}

function OcultarComentarios() {
  // Select the iframe using the CSS selector "iframe[id^='dsq-app']"
  //var iframe = document.querySelector("iframe[id^='dsq-app']");
  // Set the display property to "none" to hide the iframe
  //iframe.style.display = "none";
  
  var sections = document.querySelectorAll("section.WdgtCn");

  // Check if there are at least three elements
  if (sections.length >= 3) {
    // Get the third element
    var thirdSection = sections.item(3);

    // Set the display property to "none" to hide the third section
    thirdSection.style.display = "none";
  }
}

  // Cuando se cargue el DOM, llamar a la función applyExternalCss() y a OcultarComentarios()
document.addEventListener("DOMContentLoaded", function() {
  applyStyles();
  OcultarComentarios();
});
