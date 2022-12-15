function PlayPause(){
    if (myVideo.paused)
    myVideo.play();
else
    myVideo.pause();
}
document.getElementById("playpause").onclick = PlayPause;

function Play(){
    if (myVideo.paused)
    myVideo.play();
}
document.getElementById("play").onclick = Play;

function Pause(){
    if (myVideo.played)
    myVideo.pause();
}
document.getElementById("pause").onclick = Pause;