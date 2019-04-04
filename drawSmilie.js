function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");


    drawHead(context);
    drawEyes(context);
    drawMouth(context);
    drawBody(context);
    drawArms(context);

    context.stroke();

    // Skapa linjer
    /*context.lineWidth = 3;

    context.fillStyle = "red";
    context.strokeStyle = "blue";

    context.fillRect(10, 10, 400, 500);
    context.strokeRect(100, 100, 200, 200);

    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "yellow";
    context.moveTo(20, 500);
    context.lineTo(200, 200);
    context.stroke();*/
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 */

function drawHead(context) {
     //Cirkel
     context.lineWidth = 5;
     context.strokeStyle = "black";
     context.beginPath();
     context.arc(200, 200, 150, 0,2 * Math.PI);
     context.stroke();

}

function drawEyes(context) {
    //vänster öga smile
    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(150, 150, 10, 0,2 * Math.PI);
    context.stroke(); 

    //höger öga smile
    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(250, 150, 10, 0,2 * Math.PI);
    context.stroke();   
}

function drawMouth(context) {
    // munnen smile
    context.lineWidth = 3;
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(200, 250, 60, 0, 0.99 * Math.PI);
    context.stroke();  
}

function drawBody(context) {
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "blue";
    context.moveTo(200, 600);
    context.lineTo(200, 350);
    context.stroke();
}

function drawArms(context) {
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "blue";
    context.moveTo(200, 400);
    context.lineTo(100, 350);
    context.stroke();

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "blue";
    context.moveTo(200, 400);
    context.lineTo(100, 350);
    context.stroke();
    
}