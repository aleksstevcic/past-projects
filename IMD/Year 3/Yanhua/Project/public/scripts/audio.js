function playFireworkSound(soundNum){
    let sound = document.querySelector('#audio-firework-0' + soundNum);
    if(sound != null)
        sound.play();
}

function playGongSound(){
    let sound = document.querySelector('#audio-gong');
    if(sound != null)
        sound.play();
}

function playMixingSound(soundNum){
    let sound = document.querySelector('#audio-mixing-0' + soundNum);
    if(sound != null)
        sound.play();
}