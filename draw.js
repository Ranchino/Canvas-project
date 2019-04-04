var dotPositions = [];
var nrOfDots = 120;
var multiplier = 3;

var circleRadius = 200;
var dotRadius = 3;
var lineWidth = 1;
var offset = 50;



function nrOfDotsChanged(value) {
    nrOfDots = value;
    document.getElementById("myRange").innerText = value;
    draw();
}

function multiplierChanged(value) {
    multiplier = value;
    document.getElementById("multi").innerText = value;
    draw();
}

function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    //context.clearRect(0,0, canvas.)
    
    drawCircle(context);
    drawDots(context);
    drawLines(context);
}

/**
 * drow the circle for this project
 * @param {CanvasRenderingContext2D} context 
 */
function drawCircle(context) {
    context.lineWidth = lineWidth;
    context.strokeStyle = "black";
    
    var circleCenterPoint = circleRadius + offset;
    context.arc(circleRadius + offset, circleRadius + offset, circleRadius, 0,2 * Math.PI);
    context.stroke();
}

/**
 * Mark the dots for this circle
 * @param {CanvasRenderingContext2D} context
 */
function drawDots(context) {
    context.beginPath();
    context.fillStyle = "red";

    for (var i=0; i < nrOfDots; i++) {
        var angle = 2 * Math.PI / nrOfDots * i;
        var outlineCircleCenter = circleRadius + offset;
        var x = outlineCircleCenter + circleRadius * Math.cos(angle);
        var y = outlineCircleCenter + circleRadius * Math.sin(angle);

        context.moveTo(x + dotRadius, y);
        context.arc(x, y, dotRadius, 0, 2 * Math.PI);

        dotPositions.push({
            x: x,
            y: y
        });
    }
    context.fill();
}


/**
 * Mark the lines for the circle
 * @param {CanvasRenderingContext2D} context
 */
function drawLines(context) {
    context.beginPath();
    context.lineWidth = lineWidth;
    context.strokeStyle = "black";

    for (var i=0; i < nrOfDots; i++) {
        
        var startingPoint = dotPositions[i];
        var nextIndex = (i * multiplier) % nrOfDots;
        var endPoint = dotPositions[nextIndex];

        context.moveTo(startingPoint.x, startingPoint.y);
        context.lineTo(endPoint.x, endPoint.y);

    }
    context.stroke();

}

