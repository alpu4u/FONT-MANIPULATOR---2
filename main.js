function setup()
{
    video= createCapture(VIDEO)
    video.size(550, 500)

    canvas= createCanvas(550,550 )
    canvas.position(560, 150)

    poseNet=ml5.poseNet(video, ModelLoaded)
    poseNet.on('pose', gotPoses)
}

function ModelLoaded()
{
    console.log('Model has loaded!')
}

function gotPoses(result)
{
    if(result.length > 0)
    {
        console.log(result)
    }
}
function draw()
{
    background('#09ff00')
}