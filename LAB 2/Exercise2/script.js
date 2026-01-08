
var video = document.getElementById("myVideo");
var vTimeDisplay = document.getElementById("vidTime");

function vidPlay() {
    video.play();
}

function vidPause() {
    video.pause();
}

function vidVolUp() {
    if(video.volume < 1) video.volume += 0.1;
}

function vidVolDown() {
    if(video.volume > 0) video.volume -= 0.1;
}

video.ontimeupdate = function() {
    
    vTimeDisplay.innerText = video.currentTime.toFixed(2);
};



var audio = document.getElementById("myAudio");
var aTimeDisplay = document.getElementById("audTime");

function audPlay() {
    audio.play();
}

function audPause() {
    audio.pause();
}

function audVolUp() {
    if(audio.volume < 1) audio.volume += 0.1;
}

function audVolDown() {
    if(audio.volume > 0) audio.volume -= 0.1;
}


audio.ontimeupdate = function() {
    aTimeDisplay.innerText = audio.currentTime.toFixed(2);
};