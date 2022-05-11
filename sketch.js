function setup() {
  createCanvas(600, 200);
  noStroke();
}

function draw() {
    background(0);
    var diameter = distanceToMiddle(mouseX);
    ellipse(width/2, height/2, diameter, diameter);
}

function distanceToMiddle(x){
    var d = abs(width/2 - x);
    return d;
  
  var x, y; //center of the ellipse
  function mouseIsOverEllipse(){
    var result;
    //calculate distance between mouse position and ellipse position
    var d = dist(mouseX, mouseY, x, y);
    if (d < radius) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

}
