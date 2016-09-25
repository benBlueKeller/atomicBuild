"use strict";

function Element(xPos, yPos, sym, molecule) {
	this.xPos = xPos;
	this.yPos = yPos;
	this.symbol = sym;
	this.molecule = molecule || null;
	this.hexULBondPres = false;
	this.hexDLBondPres = false;
	this.hexURBondPres = false;
	this.hexDRBondPres = false;
	this.hexRBondPres = false;
	this.hexLBondPres = false;
	this.isCurEle = false;
    this.dragoffx = 0; // See CanvasState mousedown and mousemove events for explanation
    this.dragoffy = 0;
}

Element.prototype.drawLineWithDelta = function (ctx, deltaX, deltaY) {
    var x2 = this.xPos + deltaX;
    var y2 = this.yPos + deltaY;
    ctx.beginPath();
    ctx.moveTo(this.xPos, this.yPos);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

Element.prototype.placeThis = function(ctx) {
	ctx.fillText(this.symbol, this.xPos, this.yPos);
	if (this.isCurEle) {
		// draw red circle around current element
		ctx.strokeStyle = "#FF0000";
		ctx.beginPath();
		ctx.arc(this.xPos, this.yPos, 10, 0, 2*Math.PI);
		ctx.stroke();
		ctx.strokeStyle = "#000";
	}
	if (this.hexULBondPres) {
		this.drawLineWithDelta(ctx, -30, -50);
	}
	if (this.hexDLBondPres) {
		this.drawLineWithDelta(ctx, -30, 50);
	}
	if (this.hexURBondPres) {
		this.drawLineWithDelta(ctx, 30, -50);
	}
	if (this.hexDRBondPres) {
		this.drawLineWithDelta(ctx, 30, 50);
	}
	if (this.hexLBondPres) {
		this.drawLineWithDelta(ctx, -60, 0);
	}
	if (this.hexRBondPres) {
		this.drawLineWithDelta(ctx, 60, 0);
	}


	//console.log("placed: " + this.symbol + " at " + this.xPos + "," + this.yPos)
}
