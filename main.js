status = "";
video = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
}

function start() {
    object_detector = ml5.objectDetector("COCOSSD", modelLoaded);
    document.getElementById("finding_status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (status != "") {
        object_detector.detect(video, gotresult);
    }
}