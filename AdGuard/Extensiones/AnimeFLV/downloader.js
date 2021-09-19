// ==UserScript==
// @name        Downloader
// @description Downloader
// @match       https://www3.animeflv.net/ver/*
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

	var zNode       = document.createElement ('div');
	zNode.innerHTML = '<button id="myButton" type="button">'
					+ 'For Pete\'s sake, don\'t click me!</button>'
					;
	zNode.setAttribute ('id', 'myContainer');
	document.body.appendChild (zNode);

	//--- Activate the newly added button.
	document.getElementById ("myButton").addEventListener("click", ButtonClickAction, false);

}

function ButtonClickAction (zEvent) {
    /*--- For our dummy action, we'll just add a line of text to the top
        of the screen.
    */
    var zNode       = document.createElement ('p');
    zNode.innerHTML = 'The button was clicked.';
    document.getElementById ("myContainer").appendChild (zNode);
}
;}
