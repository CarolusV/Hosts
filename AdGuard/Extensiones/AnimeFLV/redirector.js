// ==UserScript==
// @name        Redirect m.animeflv.net to https://www3.animeflv.net/
// @description No m.animeflv.net, only www3.animeflv.net
// @match       https://*.animeflv.net/*
// @version     1.3
// @grant       none
// ==/UserScript==


window.location.href =window.location.href.replace('https://m.animeflv.net','https://www3.animeflv.net');

if (window.location.href.indexOf("https://m.animeflv.net") != -1){
    window.location.href.replace('https://m.animeflv.net','https://www3.animeflv.net')
}    


if(content.document.location == "https://m.animeflv.net"){
            window.location.replace('https://m.animeflv.net','https://www3.animeflv.net');
}

document.body.addEventListener('click', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/m.animeflv.net/) ) {
        targ.href = targ.href.replace(/https?:\/\/m.animeflv.net/, 'https://www3.animeflv.net');
    }
});
