// ==UserScript==
// @name         CSGO Float Checker
// @version      0.31
// @description  Check CSGO skins's Float in the market
// @author       ----
// @connect      api.csgofloat.com
// @include      http*://steamcommunity.com/market/listings/730/*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

async function checkFloats() {
  var items = document.getElementsByClassName("market_actionmenu_button");
  var ids = [];
  for (let i = 0; i < items.length; i++) ids.push(items[i].id);
  var buttons = document.getElementsByClassName("market_listing_item_name_block");
  var promises = [];
  for (let i = 0; i < buttons.length - 1; i++) {
    let node = buttons[i].getElementsByClassName("btn_green_white_innerfade btn_medium market_noncommodity_buyorder_button")[0];
    if (!node) continue;
    promises.push(checkFloat(i, node));
  }
  await Promise.all(promises);
  //sortByFloat();
}

async function checkFloat(i, node) {
  keys = Object.keys(g_rgAssets[730][2]);
  link = g_rgAssets[730][2][keys[i]].market_actions[0].link;
  link = link.replace("%assetid%", keys[i]);
  return fetch("https://api.csgofloat.com/?url=" + link)
    .then((response) => response.json())
    .then((response) => {
      node.innerText = response.iteminfo.floatvalue;
      console.log(response.iteminfo.floatvalue);
    });
}

window.addEventListener("load", checkFloats);

