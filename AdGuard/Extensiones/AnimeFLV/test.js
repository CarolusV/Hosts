// ==UserScript==
// @name          test
// @description	  test
// @author        CarolusV
// @include       https://www3.animeflv.net
// @include       http://www3.animeflv.net
// @include       www3.animeflv.net
// @include       animeflv.net
// @run-at        document-start
// @version       0.32
// ==/UserScript==

    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'https://raw.githubusercontent.com/CarolusV/Hosts/master/AdGuard/Extensiones/AnimeFLV/custom_black.css', true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                var css_code =request.responseText;
								console.log(css_code);
              
                          if (typeof GM_addStyle != "undefined") {
                              GM_addStyle(css_code);
                            } else if (typeof PRO_addStyle != "undefined") {
                              PRO_addStyle(css_code);
                            } else if (typeof addStyle != "undefined") {
                              addStyle(css_code);
                            } else {
                              var node = document.createElement("style");
                              node.type = "text/css";
                              node.appendChild(document.createTextNode(css_code));
                              var heads = document.getElementsByTagName("head");
                              if (heads.length > 0) {
                                heads[0].appendChild(node);
                              } else {
                                // no head yet, stick it whereever
                                document.documentElement.appendChild(node);
                              }
                              }
                            }
              
				//console.log( request.responseText);
            }
        }

();
