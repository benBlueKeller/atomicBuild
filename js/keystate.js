"use strict";

(function constructKeyState(ks) {
	ks.keyDown = function(key) {
		// add key to keys down list
		this.keysDown.push(key);
		//if alt key(18) is down, call .altKeyDown
		if(this.keysDown.indexOf(18) > -1) {
			this.altKeyDown();
		}
		/**
		 * will be called multiple times
		 * console.log(this.keysDown);
		 */
	};


	ks.keyUp = function(key) {
		//remove key completely from keys down list
		while(this.keysDown.indexOf(key) > -1) {
			this.keysDown.splice(ks.keysDown.indexOf(key), 1);	
		}
		//if key was alt(18) call .altKeyUp
		if(key === 18) {
			this.altKeyUp();
		}
		//console.log(this.keysDown);
	};

	ks.altKeyUp = function() {
		var keysPressed = this.altKeys;
		this.altKeys = [];
		console.log(keysPressed);
		//if keyspressed.length is 2 draw diagonal
		if(keysPressed.length === 2) {
			//if down(40) & right(39) pressed
			if(keysPressed.indexOf(40) > -1 && keysPressed.indexOf(39) > -1) {
				console.log("\n\nDR\n\n");
				window.canvas.newEleDRCur();
			}
			//down(40) & left(37) pressed
			if(keysPressed.indexOf(40) > -1 && keysPressed.indexOf(37) > -1) {
				console.log("\n\nDL\n\n");
				window.canvas.newEleDLCur();
			}
			//up(38) & left(37)
			if(keysPressed.indexOf(38) > -1 && keysPressed.indexOf(37) > -1) {
				console.log("\n\nUL\n\n");
				window.canvas.newEleULCur();
			}
			//up(38) & right(39)
			if(keysPressed.indexOf(38) > -1 && keysPressed.indexOf(39) > -1) {
				console.log("\n\nUR\n\n");
				window.canvas.newEleURCur();
			}
		}
		//if keypressed.length is 1, draw along axis
		if(keysPressed.length === 1) {
			// Up arrow  38
			if (keysPressed.indexOf(38) > -1) {	
					console.log("\n\nU\n\n");
				}
			// Down arrow  40
			if(keysPressed.indexOf(40) > -1) {
				console.log("\n\nD\n\n");
			}
			// Left arrow  37
			if(keysPressed.indexOf(37) > -1) {
				console.log("\n\nL\n\n");
				canvas.newEleLCur();
			}
			// Right arrow 39
			if(keysPressed.indexOf(39) > -1) {
				console.log("\n\nR\n\n");
				canvas.newEleRCur();
			}
		}
	};

	ks.altKeyDown = function() {
		//define keysDown 1st time alt is pressed
		if(typeof this.keysDown !== 'object') {
			this.keysDown = [];
		}
		// add each key not marked down to keyspressed
		for (var i  = 0; i < this.keysDown.length; i++) {
			var k = this.keysDown[i];
			if(this.altKeys.indexOf(k) === -1 && k !== 18) {
				this.altKeys.push(k);
			}
		}
	};


})(this.KeyState = {
	keysDown: []
});

/**
 * the .keyDown method will be called multiple times
 * therefore 
 * the alt key must check to see if it is presseddown while arrowkeys are pressedown
 * when the alt key is up, the conditions while found down are processed and reset
 */