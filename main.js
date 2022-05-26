var leftWristx = 0
var rightWristx = 0
var difference=0

function setup() {
    video = createCapture(VIDEO)
    video.size(530, 400)
    canvas = createCanvas(530, 400)
    classifier = ml5.poseNet(video, modelLoaded)
    classifier.on("pose", gotPoses)
}

function draw() {
    background("grey")
    textSize(difference)
    fill("red")
    text("Avani ", 100, 200)
}

function modelLoaded() {
    console.log("PoseNet is successfully initialized.")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        leftWristx=results[0].pose.leftWrist.x
        rightWristx=results[0].pose.rightWrist.x
        difference = floor(leftWristx - rightWristx)
    
    }
}