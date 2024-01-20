nosex = 0;
nosey = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    canvas = createCanvas(550, 550)
    canvas.position(750, 150);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);

        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("noseX = " + nosex + "noseY = " + nosey);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWrist = " + leftWristX + "rightWrist = " + rightWristX + "difference = " + difference);
    }
}

function draw()
{
    background("#6d90c9");

    document.getElementById("text_size").innerHTML = "Width and Height of the Text will be = " + difference + "px";
    fill("#e6e393");
    text("Hello", nosex, nosey);
    textSize(difference);
}