var lastState;
var init = function() {
	if (typeof ytPlayeronStateChangeplayer1 !== "undefined") {
		ytPlayeronStateChangeplayer1 = function(state) {
			if (state == 3 || (state == 2 && lastState == 2)) {
				document.getElementById('spinning-seal').style.opacity = 1;
			}
			else {
				document.getElementById('spinning-seal').style.opacity = 0;	
			}
			lastState = state;
		}
	}
	else {
		setTimeout(init, 10);
	}
}
init();