var leftwristX = 0;
var rightwristX = 0;
var noseX = 0;
var noseY = 0;
difference = 0;

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(700, 225);

    video = createCapture(VIDEO);
    video.size(450, 450);
    video.position(100, 250);

}



