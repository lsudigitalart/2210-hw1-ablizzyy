function setup(){

    createCanvas(windowWidth, windowHeight);
    background(0);
    translate(width/2,height/2);

    //eyes
    ellipse(50,100,80,190);
    ellipse(100,100,80,190);

    //eyelids
    line(12,70,138,70);

    //eyeballs
    fill(0);
    circle(21,80,20);
    circle(71,80,20);

    //mouth
    fill(255);
    rect(70,240,70,5);


}

function draw(){

}