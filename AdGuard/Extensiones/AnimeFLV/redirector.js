// ==UserScript==
// @name        Redirect m.animeflv.net to https://www3.animeflv.net/
// @description No m.animeflv.net, only www3.animeflv.net
// @match       https://m.animeflv.net/*
// @version     1.4.2
// @grant       none
// @noframes
// @run-at        document-start
// ==/UserScript==

document.addEventListener ("DOMContentLoaded", DOM_ContentReady);
window.addEventListener ("load", pageFullyLoaded);

function DOM_ContentReady () {
    // 2ND PART OF SCRIPT RUN GOES HERE.
    // This is the equivalent of @run-at document-end
    //console.log ("==> 2nd part of script run.", new Date() );
}

function pageFullyLoaded () {
    //console.log ("==> Page is fully loaded, including images.", new Date() );
	// end do the stuff
			window.location.href =window.location.href.replace('https://m.animeflv.net','https://www3.animeflv.net');

			if (window.location.href.indexOf("https://m.animeflv.net") != -1){
				window.location.href.replace('https://m.animeflv.net','https://www3.animeflv.net');
			}

			if(content.document.location.indexOf("https://m.animeflv.net") != -1){
						window.location.replace('https://m.animeflv.net','https://www3.animeflv.net');
			}

			document.body.addEventListener('wheel', function(e){
			    var targ = e.target || e.srcElement;
			    if ( targ && targ.href && targ.href.match(/https?:\/\/m.animeflv.net/) ) {
			        targ.href = targ.href.replace(/https?:\/\/m.animeflv.net/, 'https://www3.animeflv.net');
			    }
			})
	// do the stuff
;}
