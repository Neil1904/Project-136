status = "";
object = [];

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("finding_status").innerHTML = "Status : Detecting Object";
}

function start() {
    object_detector = ml5.objectDetector("COCOSSD", modelLoaded);
    document.getElementById("finding_status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetection.detect(video, gotresults);
}

function draw() {
    image(video, 0, 0, 480, 380);
    if (status != "") {
        object_detector.detect(video, gotresult);
    }
}

function gotresult(error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        object = results;
    }
}
