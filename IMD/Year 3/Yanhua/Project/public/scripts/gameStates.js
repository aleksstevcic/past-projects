function gameStart(){
    gameStarted = true;
    fireworkOn = false;
    fireworkSuccess[1] = null;
    fireworkSuccess[2] = null;
    fireworkSuccess[3] = null;
    fireworksIconUpdate();
    
    resetAllowed = false;
    setTimeout(function(){resetAllowed = true;}, 1000);
    
    currentFirework = 0;
    
    gameText('start');
    
    randomRequirements();
    createTimer();
    enableBowls();

    // console.log("GAMESTATES: Game has started: " + gameStarted);
//    console.log("Gamestates ping");
    socket.emit("gameHasStarted", { gameState: gameStarted });
}

function gameReset(){
    deleteTimer();
    randomRequirements();
    createTimer();
    enableBowls();
    gameText('restart');
    fireworkOn = false;
    
    resetAllowed = false;
    setTimeout(function(){resetAllowed = true;}, 1000);
    
    fireworkSuccess[1] = null;
    fireworkSuccess[2] = null;
    fireworkSuccess[3] = null;
    fireworksIconUpdate();
    
    currentFirework = 0;

    socket.emit("gameHasReset", { gameState: gameStarted });
    
     setTimeout(function(){
        socket.emit("gameHasStarted", { gameState: gameStarted });
     }, 5000);
}

function gameEnd(){
    gameEnded = true;
    gameStarted = false;
    resetAllowed = false;

    deleteTimer();
    disableBowls();
    
    fireworkOn = true;
    
    var fireworkSuccesses = 0;
    for(var i = 0; i < fireworkTotal; i++){
        if(fireworkSuccess[i] && fireworkSuccess[i] != null)
            fireworkSuccesses++;
    }
        
    if(fireworkSuccesses <= 0)
        gameText('end');
    if(fireworkSuccesses == 1)
        gameText('one');
    if(fireworkSuccesses == 2)
        gameText('two');
    if(fireworkSuccesses >= 3)
        gameText('win');
    
    //console.log("GAMESTATES: Game has ended: " + gameEnded);
    socket.emit("gameHasEnded", { gameState: gameEnded });
}

function createTimer(){
    let timerHolder = document.querySelector('#timerHolder');
    let timer       = document.createElement('a-entity'); // create new timer text
    
    timer.setAttribute('id', 'timer-text');
    timer.setAttribute('timer', true);
    
    timerHolder.appendChild(timer); // append entity to holder
}

function deleteTimer(){
    let timer = document.querySelector('#timer-text');
    if(timer != null)
        timer.parentNode.removeChild(timer);
}

function enableBowls(){
    let bowls = document.querySelector('#World-Collisions');
    
    bowls.setAttribute('position', '0 0 0');
}

function disableBowls(){
    let bowls = document.querySelector('#World-Collisions');
    
    bowls.setAttribute('position', '0 -10 0');
}

document.addEventListener('timerEnd', function() {
    console.log("Time Ran Out");
    gameEnd();
    
});

function gameText(value){
    let text = document.querySelector('#textGameState');
    
    if(value == 'start' || value == 'restart')
        text.setAttribute('text', 'value:');
    if(value == 'end')
        text.setAttribute('text', 'value:Game Over\n 0 Accurate Fireworks');
    if(value == 'one')
        text.setAttribute('text', 'value:Game Over\n 1 Accurate Firework');
    if(value == 'two')
        text.setAttribute('text', 'value:Game Over\n 2 Accurate Fireworks');
    if(value == 'win')
        text.setAttribute('text', 'value:Congratulations!\n 3 Accurate Fireworks');
}