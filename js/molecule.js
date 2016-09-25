"use strict";

function Molecule(canvas) {
	this.elements = [];
	this.canvas = canvas
}

Molecule.prototype.scrollDownEleList = function() {
	for(var i=0; i<this.elements.length; i++) {
        if(this.elements[i] === this.canvas.currentElement) {
            if(i !== 0) {
                r = i - 1;
            } else {
                r = this.elements.length - 1;
            }
            this.changeCur(this.elements[r]);
            break;
        }
    }
};

Molecule.prototype.move = function(deltaX, deltaY) {
	var l = this.elements.length;
    //console.log("old: " + this.elements[i].xPos + "," + this.elements[i].yPos);
    for(var i = 0; i<l; i++) {
        //console.log("for");
        var x = this.elements[i].xPos;
        var y = this.elements[i].yPos;
		this.elements[i].xPos = x + deltaX;
		this.elements[i].yPos = y + deltaY;
        //console.log("new: " + this.elements[i].xPos + "," + this.elements[i].yPos);
	}
};
