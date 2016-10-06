"use strict";

function createNewElement(canvas, posX, posY, newMolecule) {
    var mol;
    if(canvas.currentElement === null || newMolecule === true) {
      mol = new Molecule(canvas);
      canvas.molecules.push(mol);
    } else {
      mol = canvas.currentElement.molecule;
    }
    var ele = new Element(posX, posY, canvas.sym2bDrawn, mol);
    mol.elements.push(ele);
    canvas.elements.push(ele);
    canvas.changeCur(ele);
    return ele;
}


function distanceFormula(x1, y1, x2, y2) {
    return Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
 }

/**Find point a certain distance along a line
 * returns point that is a certain distance (d) from point 1 on line (x1, y1)-(x2,y2)
 * @param  {int} d  distance from point 1 return point will be
 * @param  {int} x1 x of point 1
 * @param  {int} x2 y of point 1
 * @param  {int} y1 x of point 2
 * @param  {int} y2 y of point 2
 * @return {object}    x and y of requested point
 */
 function pointOnLine(d, x1, x2, y1, y2) {
    var dRatio = d / distanceFormula(x1, x2, y1, y2);
    function find(point1, point2) {
      return (1 - dRatio) * point1 + dRatio * point2;
    }
    return {
      x: find(x1, x2),
      y: find(y1, y2)
    };
 }

 /*** canvas-drawing functions ***/

 function drawLine(ctx, x1, x2, y1, y2) {
    if(arguments.length === 2 && typeof x1 === 'object') {
      drawLine(ctx, x1.x1, x1.x2, x1.y1, x1.y2);
      return;
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
 }

function CanvasState(canvas) {
  // **** First some setup! ****
  
  this.canvas = canvas;
  this.width = canvas.width;
  this.height = canvas.height;
  this.ctx = canvas.getContext('2d');

  
  // This complicates things a little but but fixes mouse co-ordinate problems
  // when there's a border or padding. See getMouse for more detail
  var stylePaddingLeft, stylePaddingTop, styleBorderLeft, styleBorderTop;
  if (document.defaultView && document.defaultView.getComputedStyle) {
    this.stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingLeft'], 10)      || 0;
    this.stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(canvas, null)['paddingTop'], 10)       || 0;
    this.styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderLeftWidth'], 10)  || 0;
    this.styleBorderTop   = parseInt(document.defaultView.getComputedStyle(canvas, null)['borderTopWidth'], 10)   || 0;
  }
  // Some pages have fixed-position bars (like the stumbleupon bar) at the top or left of the page
  // They will mess up mouse coordinates and this fixes that
  var html = document.body.parentNode;
  this.htmlTop = html.offsetTop;
  this.htmlLeft = html.offsetLeft;

  // **** Keep track of state! ****
  
  this.valid = false; // when set to false, the canvas will redraw everything
  this.molecules = [];//the collection of groups of elements
  this.elements = [];  // the collection of things to be drawn
  this.dragging = false; // Keep track of when we are dragging
  // the current selected object. In the future we could turn this into an array for multiple selection
  this.selection = null;
  this.currentElement = null;
  this.previousElement = null;

  this.prevMouseX;
  this.prevMouseY;
  this.sym2bDrawn = '';

   // **** Then events for the canvas ****
  
  // This is an example of a closure!
  // Right here "this" means the CanvasState. But we are making events on the Canvas itself,
  // and when the events are fired on the canvas the variable "this" is going to mean the canvas!
  // Since we still want to use this particular CanvasState in the events we have to save a reference to it.
  // This is our reference!
  var myState = this;
  
  //fixes a problem where double clicking causes text to get selected on the canvas
  canvas.addEventListener('selectstart', function(e) { e.preventDefault(); return false; }, false);
  // Up, down, and move are for dragging
  canvas.addEventListener('mousedown', function(e) {
    var mouse = myState.getMouse(e);
    var mx = mouse.x;
    var my = mouse.y;
    var elements = myState.elements;
    var l = elements.length;
    myState.dragging = true;
    myState.prevMouseX = mx;
    myState.prevMouseY = my;

    //select closest element
    var dToBeat = 15;
    for(var i = 0; i < l; i++) {
      var d = distanceFormula(elements[i].xPos, elements[i].yPos, mx, my);
      if (d < dToBeat) {
        dToBeat = d;
        myState.changeCur(elements[i]);
      }
    }
    /*for (var i = 0; i < l; i--) {
      //var mySel = elements[i];
      // Keep track of where in the object we clicked
      // so we can move it smoothly (see mousemove)
      deltaX = mx - elements[i].xPos;
      deltaY = my - elements[i].yPos;
      elements[i].dragoffy = deltaY;
      elements[i].dragoffx = deltaX;
      myState.selection = elements[i];
      myState.valid = false;
      console.log(elements[i].sym + "\n" +
                  elements[i].dragoffx + "," +
                  elements[i].dragoffy);
    }
    // havent returned means we have failed to select anything.
    // If there was an object selected, we deselect it
    if (myState.selection) {
      myState.selection = null;
      myState.valid = false; // Need to clear the old selection border
    }*/
  }, true);
  canvas.addEventListener('mousemove', function(e) {
    if (myState.dragging){
      var mouse = myState.getMouse(e),
          molecule = myState.currentElement.molecule;
      var deltaX = mouse.x - myState.prevMouseX,
          deltaY = mouse.y - myState.prevMouseY;
      molecule.move(deltaX, deltaY);
      myState.draw();
      //console.log(deltaX + "," + deltaY);
      myState.prevMouseX = mouse.x;
      myState.prevMouseY = mouse.y;  

      // We don't want to drag the object by its top-left corner, we want to drag it
      // from where we clicked. Thats why we saved the offset and use it here
      /* old failed movement
      var elements = myState.elements;
      var l = elements.length;
      for (var i = l-1; i >= 0; i--) {
        var mySel = elements[i];
        mySel.xPos = mouse.x - mySel.dragoffx;
        mySel.yPos = mouse.y - mySel.dragoffy;   
      }
      myState.draw();*/
    }
  }, true);
  canvas.addEventListener('mouseup', function(e) {
    myState.dragging = false;
  }, true);
}

/*CanvasState.prototype.createNewElement = function(posX, posY, sym) {
  var ele = new Element(posX, posY, sym);
  this.elements.push(ele);
  this.currentElement = ele;
  return ele;
}*/

CanvasState.prototype.draw = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
  for (var i = 0; i < this.elements.length; i++) {
    var shape = this.elements[i];
    // We can skip the drawing of elements that have moved off the screen:
    if (shape.xPos > this.canvas.width || shape.yPos > this.canvas.height ||
        shape.xPos + shape.w < 0 || shape.yPos + shape.h < 0) continue;
    this.elements[i].placeThis(this.ctx);
  }
};

CanvasState.prototype.selectEle2b = function(element) {
  $(".selected").removeClass("selected");
  $("#" + element.symbol).addClass("selected");
  this.sym2bDrawn = element.symbol;
};

CanvasState.prototype.changeCur = function(newEle) {
  this.previousElement = this.currentElement;
  try {
    this.previousElement.isCurEle = false;
  } catch(e) {
    console.log("catch in .changeCur - likely null");
  }
  this.currentElement = newEle;
  this.currentElement.isCurEle = true;
  this.draw();
};

/*get mouse relative to canvas*/
CanvasState.prototype.getMouse = function(e) {
  var element = this.canvas, offsetX = 0, offsetY = 0, mx, my;
  
  // Compute the total offset
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += this.stylePaddingLeft + this.styleBorderLeft + this.htmlLeft;
  offsetY += this.stylePaddingTop + this.styleBorderTop + this.htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;
  
  // We return a simple javascript object (a hash) with x and y defined
  return {x: mx, y: my};
};

CanvasState.prototype.newEleULCur = function() {
  var eleXPos = this.currentElement.xPos - 30;
  var eleYPos = this.currentElement.yPos - 50;
  var ele = createNewElement(this, eleXPos, eleYPos);
  ele.hexDRBondPres = true;
  ele.placeThis(this.ctx);
};

CanvasState.prototype.newEleDLCur = function() {
  var eleXPos = this.currentElement.xPos - 30;
  var eleYPos = this.currentElement.yPos + 50;
  var ele = createNewElement(this, eleXPos, eleYPos);
  ele.hexURBondPres = true;
  ele.placeThis(this.ctx);
};

CanvasState.prototype.newEleURCur = function() {
  var eleXPos = this.currentElement.xPos + 30;
  var eleYPos = this.currentElement.yPos - 50;
  var ele = createNewElement(this, eleXPos, eleYPos);
  ele.hexDLBondPres = true;
  ele.placeThis(this.ctx);
};

CanvasState.prototype.newEleDRCur = function() {
  var eleXPos = this.currentElement.xPos + 30;
  var eleYPos = this.currentElement.yPos + 50;
  var ele = createNewElement(this, eleXPos, eleYPos);
  ele.hexULBondPres = true;
  ele.placeThis(this.ctx);
}

CanvasState.prototype.newEleLCur = function() {
  var eleXPos = this.currentElement.xPos - 60;
  var eleYPos = this.currentElement.yPos;
  var ele = createNewElement(this, eleXPos, eleYPos);
  ele.hexRBondPres = true;
  ele.placeThis(this.ctx);
};

CanvasState.prototype.newEleRCur = function() {
  var eleXPos = this.currentElement.xPos + 60;
  var eleYPos = this.currentElement.yPos;
  var ele = createNewElement(this, eleXPos, eleYPos);
  this.elements.push(ele);
  ele.hexLBondPres = true;
  ele.placeThis(this.ctx);
};
CanvasState.prototype.deleteEle = function(ele) {
  //remove it from both CanvasState and its molecule's elements list
  var x1 = ele.xPos,
      y1 = ele.yPos,
      sym1 = ele.symbol;
  console.log("42");
  for(var e in this.elements) {
    console.log(e + this.elements);
    if(e.xPos === x1 && e.yPos === y1 && e.symbol === sym1){
      console.log("deleting " + e.symbol);
      e.molecule.pull(e);
      this.elements.pull(e);
      console.log(e.molecule);
    }
  }

};






