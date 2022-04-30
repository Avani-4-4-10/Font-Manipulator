function setup(){
   video = createCapture(VIDEO)
   video.size(530 , 400)
    canvas = createCanvas(530 , 400)
   classifier= ml5.poseNet(video , modelLoaded)
   classifier.on("pose" , gotPoses )
}
function draw(){
    background("grey")
}
function modelLoaded(){
    console.log("PoseNet is successfully initialized.")
}
function gotPoses(results){
if(results.length > 0){
    console.log(results)
}
  }
