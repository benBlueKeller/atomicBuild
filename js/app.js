"use strict";

function scrollDownEleList(canvas) {
    for(var i=0; i<canvas.elements.length; i++) {
        if(canvas.elements[i] === canvas.currentElement) {
            if(i !== 0) {
                r = i - 1;
            } else {
                r = canvas.elements.length - 1;
            }
            canvas.changeCur(canvas.elements[r]);
            break;
        }
    }
}

var canvas = new CanvasState(document.getElementById("canvas1"));
createNewElement(canvas, 200, 200, "C");
canvas.elements[0].placeThis(canvas.ctx);
canvas.newEleLCur("H");
canvas.newEleULCur("E");
canvas.newEleDLCur("M");
canvas.newEleDRCur("I");
canvas.newEleRCur("S");
canvas.newEleURCur("T");
canvas.deleteEle(canvas.currentElement);

/*add html*/
var tableHTML = '';
for (var i in periodicList) {
    var e = periodicList[i];
    tableHTML += '<div id="' + e.symbol.toString() +
                '" class="ele period' +
                e.period.toString() + ' group' +
                e.group.toString() +
                '">' +
                e.symbol +
                '</div>';
}
document.getElementById("table").innerHTML = tableHTML;
/* add eventlisteners for each element in periodic list*/
for (var i in periodicList) {
    var e = periodicList[i];
    (function(id) {
        document.getElementById(id).addEventListener('click', function(){
            canvas.selectEle2b(eleFromSym(id));
        });
    })(e.symbol);
}

/* add event listeners for placement buttons*/
document.getElementById("scrollDownEleList").addEventListener('click', function() {
	scrollDownEleList(canvas);
	console.log("scrolled  " + canvas)
}, true);

document.getElementById("downRight").addEventListener('click', function() {
	canvas.newEleDRCur();
}, true);

document.getElementById("upRight").addEventListener('click', function() {
	canvas.newEleURCur();
}, true);

document.getElementById("downLeft").addEventListener('click', function() {
	canvas.newEleDLCur();
}, true);

document.getElementById("upLeft").addEventListener('click', function() {
	canvas.newEleULCur();
}, true);


document.getElementById("right").addEventListener('click', function() {
	canvas.newEleRCur();
}, true);


document.getElementById("left").addEventListener('click', function() {
	canvas.newEleLCur();
}, true);

document.getElementById("newEleInNewMole").addEventListener('click', function() {
    createNewElement(canvas, 150, 150, document.getElementById("sym").value, true);
}, true);

/* keyboard shortcuts*/
var lastPressed;

/* only one last pressed is used - only one keyboard shortcut can be used at a time */
function newLastPressed(k) {
    lastPressed = k;
    //if same key in 3 sec, null
    (function(j) {
        setTimeout(function() {
            if(lastPressed === j) {
                lastPressed = null;
            }
        }, 3000);
    })(k);
}

function selectEle(char) {
    var returned = false;
    if(typeof lastPressed === 'string') {
        var x = eleFromSym(lastPressed + char);
        if(x !== null) {
            returned = true;
            return x;
        }
    }
    if(returned === false) {
        var y = eleFromSym(char);
        return y;
    }
}

function charPressed(char) {
    var ele = selectEle(char);
    if (ele !== null) {
        canvas.selectEle2b(ele);
    }
    newLastPressed(char);
    
}


$(document).on("keydown", function(e) {
    //check for arrow key with alt key (to prevent scrolling)
    var key = String.fromCharCode(e.which);
    charPressed(key);
    window.KeyState.keyDown(e.which);
});

$(document).on("keyup", function(e) {
    window.KeyState.keyUp(e.which);
})

/*
Up arrow  38
Down arrow  40
Left arrow  37
Right arrow 39
*/


