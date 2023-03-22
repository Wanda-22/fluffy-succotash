lwrist=0;
rwrist=0;
size=0;

function setup() {
    s=createCanvas(700,600);
    s.position(900,150);
    l=createCapture(VIDEO);
    l.size(700,600);
   w=ml5.poseNet(l,m);
   w.on('pose',ans4);
}

function m() {
    console.log("poseNet is on");
}

function ans4(result) {
    if (result.length>0) {
        console.log(result);
        lwrist=result[0].pose.leftWrist.x;
        rwrist=result[0].pose.rightWrist.x;
        size=floor(lwrist-rwrist);
        console.log("Right is ",rwrist);
        console.log("Left is ",lwrist);
        document.getElementById('u').innerHTML="Size of text is- " + size + "px";
    }
}

function draw() {
    background("Peru");
    textSize(size);
    text("Coding",300,300);
}