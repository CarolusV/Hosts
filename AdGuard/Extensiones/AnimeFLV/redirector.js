// ==UserScript==
// @name        Redirect m.animeflv.net to https://www3.animeflv.net/
// @description On any web page it will check if the clicked links goes to userscripts.org. If so, the link will be rewritten to point to userscripts-mirror.org
// @include     m.animeflv.net
// @version     1.2
// @grant       none
// ==/UserScript==

// This is a slightly brute force solution, but there is no other way to do it using only a userscript. A full-fledged addon may be created soon.
// window.location.href =window.location.href.replace('m.animeflv.net','www3.animeflv.net');

if(content.document.location == "https://m.animeflv.net"){
            window.location.replace("https://www3.animeflv.net/");
}
document.body.addEventListener('mousedown', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/m.animeflv.net/) ) {
        targ.href = targ.href.replace(/https?:\/\/m.animeflv.net/, 'https://www3.animeflv.net');
    }
});