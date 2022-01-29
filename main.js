BTS_butter="";
harry_potter="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    BTS_butter = loadSound("music2.mp3");
    harry_potter = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}

function play()
{
    BTS_butter.play();
    
}


