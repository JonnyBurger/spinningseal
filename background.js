var s = document.createElement('script');
s.src = chrome.extension.getURL("script.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.body).appendChild(s);


var s 	= document.createElement('img');
s.id 	= 'spinning-seal';
s.width = document.getElementById('player-api').offsetWidth;
s.height = document.getElementById('player-api').offsetHeight - 40;
s.style.position 	= 'absolute';
s.style.zIndex 		= '900';
s.style.top 		= '15px';
s.style.pointerEvents = 'none';
s.style.webkitTransition = 'opacity 0.2s';
s.src 	= chrome.extension.getURL("seal.gif");
document.getElementById('player-api').appendChild(s);