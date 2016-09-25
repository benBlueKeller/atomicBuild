/*function drawRight(posX, posY) {
 var endX = posX + c;
 ctx.beginPath();
 ctx.moveTo(posX, posY);
 ctx.lineTo(endX, posY);
 ctx.stroke();
 }

 function drawDownRight(posX, posY) {
 var endX = posX + (x3-x2);
 var endY = posY + b;
 ctx.beginPath();
 ctx.moveTo(posX, posY);
 ctx.lineTo(endX, endY);
 ctx.stroke();
 }

 function drawDownLeft(posX, posY) {
 var endX = posX - (x3-x2);
 var endY = posY + b;
 ctx.beginPath();
 ctx.moveTo(posX, posY);
 ctx.lineTo(endX, endY);
 ctx.stroke();
 }

 function drawLeft(posX, posY) {
 var endX = posX - c;
 ctx.beginPath();
 ctx.moveTo(posX, posY);
 ctx.lineTo(endX, posY);
 ctx.stroke();
 }

 function drawUpRight(posX, posY) {
 var endX = posX + (x3-x2);
 var endY = posY - b;
 ctx.beginPath();
 ctx.moveTo(posX, posY);
 ctx.lineTo(endX, endY);
 ctx.stroke();
 }

 function drawUpLeft(posX, posY) {
 var endX = posX - (x3-x2);
 var endY = posY - b;
 ctx.beginPath();
 ctx.moveTo(posX, posY);
 ctx.lineTo(endX, endY);
 ctx.stroke();
 }*/
function distanceFormula(x1, y1, x2, y2) {
    return Math.abs(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
 }

function drawLineWithCoordinates(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawLineWithDelta(x1, y1, deltaX, deltaY) {
    var x2 = x1 + deltaX;
    var y2 = y1 + deltaY;
    prevPos = curPos;
    curPos = [x2, y2];
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}


//right +60, 0
function hexDrawRight(x1, y1) {
    drawLineWithDelta(x1, y1, 60, 0);
}
//down right +30, +50
function hexDrawDownRight(x1, y1) {
    drawLineWithDelta(x1, y1, 30, 50);
}
//down left -30, +50
function hexDrawDownLeft(x1, y1) {
    drawLineWithDelta(x1, y1, -30, 50);
}
//left -60, 0
function hexDrawLeft(x1, y1) {
    drawLineWithDelta(x1, y1, -60, 0);
}
//up left -30, -50
function hexDrawUpLeft(x1, y1) {
    drawLineWithDelta(x1, y1, -30, -50);
}
//up right +30, -50
function hexDrawUpRight(x1, y1) {
    drawLineWithDelta(x1, y1, 30, -50);
}


//below funtionality down within keydown()
function drawHexAccordingToArrowKeys(x1, y1) {
    if (topDown === true && leftDown === true) {
        hexDrawUpLeft(x1, y1);
    } else if (bottomDown === true && leftDown === true) {
        hexDrawDownLeft(x1, y1);
    } else if (topDown === true && rightDown === true) {
        hexDrawUpRight(x1, y1);
    } else if (bottomDown === true && rightDown === true) {
        hexDrawDownRight(x1, y1);
    } else if(leftDown === true) {
        hexDrawLeft(x1, y1);
    } else if(rightDown === true) {
        hexDrawRight(x1, y1);
    } else {
        console.log("All key conditions false");
    }
}
function newCurEle(ele) {
    prevEle = curEle;
    curEle = ele;
}

function createElement(x, y, sym) {
    newCurEle(new Element(x, y, sym));
    eleList.push(curEle);
    curEle.placeThis();
}

function connectElements(ele1, ele2) {
    drawLineWithCoordinates(ele1.xPos, ele1.yPos, ele2.xPos, ele2.yPos);
}

//right +60, 0
function createElementHexRight(ele, newEleSym) {
    var eleXPos = ele.xPos + 60;
    var eleYPos = ele.yPos;
    createElement(eleXPos, eleYPos, newEleSym);
    //hexDrawUpLeft(this.xPos, this.yPos);
}
//down right +30, +50
function createElementHexDownRight(ele, newEleSym) {
    var eleXPos = ele.xPos + 30;
    var eleYPos = ele.yPos + 50;
    createElement(eleXPos, eleYPos, newEleSym);
    //hexDrawUpLeft(this.xPos, this.yPos);
}
//down left -30, +50
function createElementHexDownLeft(ele, newEleSym) {
    var eleXPos = ele.xPos - 30;
    var eleYPos = ele.yPos + 50;
    createElement(eleXPos, eleYPos, newEleSym);
    //hexDrawUpLeft(this.xPos, this.yPos);
}
//left -60, 0
function createElementHexLeft(ele, newEleSym) {
    var eleXPos = ele.xPos - 60;
    var eleYPos = ele.yPos;
    createElement(eleXPos, eleYPos, newEleSym);
    //hexDrawUpLeft(this.xPos, this.yPos);
}
//up left -30, -50
function createElementHexUpLeft(ele, newEleSym) {
    var eleXPos = ele.xPos - 30;
    var eleYPos = ele.yPos - 50;
    createElement(eleXPos, eleYPos, newEleSym);
    //hexDrawUpLeft(this.xPos, this.yPos);
}
//up right +30, -50
function createElementHexUpRight(ele, newEleSym) {
    var eleXPos = ele.xPos + 30;
    var eleYPos = ele.yPos - 50;
    createElement(eleXPos, eleYPos, newEleSym);
    //hexDrawUpLeft(this.xPos, this.yPos);
}

//make scroller 
function scrollDownEleList() {
    for(var i=0; i<eleList.length; i++) {
        if(eleList[i] === curEle) {
            if(i !== 0) {
                r = i - 1;
            } else {
                r = eleList.length - 1;
            }
            newCurEle(eleList[r]);
            break;
        }
    }
}


var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var ctx = $canvas[0].getContext("2d");
var lastEvent;
var mousePosition;
var mouseDown = false;
var leftDown = false;
var topDown = false;
var rightDown = false;
var bottomDown = false;
var jDown = false;
var ctrlDown = false;
var curPos = [450, 400];
var prevPhs = [100, 100];
var curEle;
var prevEle;
var eleList = [];
var c = 60;
var a = c / 2;
var b = Math.sin(-60) * c;
var x1 = a;
var y1 = 0;
var x2 = a + c;
var y2 = 0;
var x3 = 2 * c;
var y3 = b;
var x4 = a + c;
var y4 = 2 * b;
var x5 = a;
var y5 = 2 * b;
var x6 = 0;
var y6 = b;



console.log("c " + c + "\na " + a + "\nb " + b +
    "\n1: (" + x1 + "," + y1 + ")" +
    "\n2: (" + x2 + "," + y2 + ")" +
    "\n3: (" + x3 + "," + y3 + ")" +
    "\n4: (" + x4 + "," + y4 + ")" +
    "\n5: (" + x5 + "," + y5 + ")" +
    "\n6: (" + x6 + "," + y6 + ")");
hexDrawRight(100, 10);
hexDrawDownRight(160, 10);
hexDrawDownLeft(190, 60);
hexDrawLeft(160, 110);
hexDrawUpLeft(100, 110);
hexDrawUpRight(70, 60);

$canvas.mousedown(function (e) {
    lastEvent = e;
    console.log("mousedown " + e);
    mouseDown = true;
    console.log(curPos[0]);
    createElement(160, 110, "C");
    createElementHexUpLeft(curEle, "O");
    connectElements(curEle, prevEle);
    createElementHexUpRight(curEle, "N");
    connectElements(curEle, prevEle);
    createElementHexRight(curEle, "Ar");
    connectElements(curEle, prevEle);
    createElementHexDownRight(curEle, "P");
    connectElements(curEle, prevEle);
    createElementHexDownLeft(curEle, "H");
    connectElements(curEle, prevEle);
    connectElements(curEle, eleList[0]);
/*
    var C = new Element(148, 148, "C");
    C.placeThis();
    C.createHexUpLeftBond("H");
*/
}).mousemove(function (e) {
    if (mouseDown) {
        ctx.beginPath();
        ctx.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        ctx.moveTo(e.offsetX, e.offsetY);
        ctx.strokeStyle = color;
        ctx.stroke();
        lastEvent = e;
    }
}).mouseup(function () {
    mouseDown = false;
});

$(window).keydown(function (e) {
    console.log("press" + e.which);
    //ctrl
    if (e.which === 17) {
        ctrlDown = true;
    }
    if (e.which === 38) {
        topDown = true;
        console.log("bino");//fixme
    }
    if (e.which === 39) {
        hexDrawRight(prevPos[0], prevPos[1]);
        rightDown = true;
    }
    if (e.which === 40) {
        bottomDown = true;
    }
    if (e.which === 37) {
        leftDown = true;
    }
    //J makes line from current position
    if (e.which === 74) {
        if (topDown === true && leftDown === true) {
            hexDrawUpLeft(curPos[0], curPos[1]);
        } else if (bottomDown === true && leftDown === true) {
            hexDrawDownLeft(curPos[0], curPos[1]);
        } else if (topDown === true && rightDown === true) {
            hexDrawUpRight(curPos[0], curPos[1]);
        } else if (bottomDown === true && rightDown === true) {
            hexDrawDownRight(curPos[0], curPos[1]);
        } else if(leftDown === true) {
            hexDrawLeft(curPos[0], curPos[1]);
        } else if(rightDown === true) {
            hexDrawRight(curPos[0], curPos[1]);
        } else {
            console.log("All key conditions false");
        }
        //drawHexAccordingToArrowKeys(x, y);
        //drawHexAccordingToArrowKeys(curPos[0], curPos[1]);
    }
}).keyup(function (e) {
    if (e.which === 38) {
        topDown = false;
    }
    if (e.which === 39) {
        rightDown = false;
    }
    if (e.which === 40) {
        bottomDown = false;
    }
    if (e.which === 37) {
        leftDown = false;
    }
    if (e.which === 74) {
        jDown = false; 
        //drawHexAccordingToArrowKeys(curPos[0], curPos[1]);
    }
});

$('#scrollDownEleList').click(function() {
    scrollDownEleList();
    console.log("curEle \n   " + curEle);
});//end click
$("#downLeft").click(function() {
    hexDrawDownLeft(curPos[0], curPos[1]);
    createElementHexDownLeft(curEle, "Dl");
});//endClick

$("#downRight").click(function() {
    hexDrawDownRight(curPos[0], curPos[1]);
    createElementHexDownRight(curEle, "DR");
})//end click
$("#upLeft").click(function() {
    hexDrawUpLeft(curPos[0], curPos[1]);
    createElementHexUpLeft(curEle, "Ul");
});//endClick

$("#upRight").click(function() {
    hexDrawUpRight(curPos[0], curPos[1]);
    createElementHexUpRight(curEle, "Ur");
})//end click
$("#left").click(function() {
    hexDrawLeft(curPos[0], curPos[1]);
    createElementHexLeft(curEle, "L");
});//endClick

$("#right").click(function() {
    hexDrawRight(curPos[0], curPos[1]);
    createElementHexRight(curEle, "R");
})//end click


$canvas.mousedown(function (e) {
    mousePosition = e;
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(20, 10);
    ctx.lineTo(20, 20);
    ctx.lineTo(10, 20);
    ctx.closePath();
    ctx.stroke();
    //hexagon
    ctx.beginPath();
    ctx.moveTo(100, 10);
    //right +60, 0
    ctx.lineTo(160, 10);
    //down right +30, +50
    ctx.lineTo(190, 60);
    //down left -30, +50
    ctx.lineTo(160, 110);
    //left -60, 0
    ctx.lineTo(100, 110);
    //up left -30, -50
    ctx.lineTo(70, 60);
    //up right +30, -50
    ctx.lineTo(100, 10);
    ctx.stroke();

}).mousemove(function () {
    if (topDown === true && leftDown === true) {
        ctx.beginPath();
        ctx.moveTo(mousePosition.offsetX, mousePosition.offsetY);
        ctx.lineTo(mousePosition.offsetX - 20, mousePosition.offsetY - 20);
        ctx.stroke();
    } else if (bottomDown === true && leftDown === true) {
        ctx.beginPath();
        ctx.moveTo(mousePosition.offsetX, mousePosition.offsetY);
        ctx.lineTo(mousePosition.offsetX - 20, mousePosition.offsetY + 20);
        ctx.stroke();
    } else if (topDown === true) {
        ctx.beginPath();
        ctx.moveTo(mousePosition.offsetX, mousePosition.offsetY);
        ctx.lineTo(mousePosition.offsetX, mousePosition.offsetY + 20);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(mousePosition.offsetX, mousePosition.offsetY);
        ctx.lineTo(mousePosition.offsetX + 20, mousePosition.offsetY);
        ctx.stroke();
    }
});
/* ctx.beginPath();
 ctx.moveTo(10, 10);
 ctx.lineTo(20, 10);
 ctx.lineTo(20, 20);
 ctx.lineTo(10, 20);
 ctx.strokeStyle = color;
 ctx.closePath();
 ctx.stroke();*/

