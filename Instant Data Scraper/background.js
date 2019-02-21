/*! instantDataScraper - 2018-02-26 */

chrome.browserAction.onClicked.addListener(function(a){chrome.windows.getCurrent(function(a){parentWindowId=a.id});window.open(chrome.extension.getURL("popup.html?tabid="+encodeURIComponent(a.id)+"&url="+encodeURIComponent(a.url)),"Table Scraper","toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=720,height=650")});