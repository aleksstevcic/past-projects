bowlObject.addEventListener('collide', function (e) { // collision event listener
    
    // console.log('Bowl has collided with body #' + e + '\n' + 'Properties: ' + e.detail.body.el.getAttribute('id'));

    if (e.detail.body.el.getAttribute('collided')) {
        e.detail.body.el.setAttribute('collided', 'true'); // set collided to true
        
        if(e.detail.body.el.getAttribute('ingredient') == 26){
            e.detail.body.el.setAttribute('ingredient', '15');
        }
        if(e.detail.body.el.getAttribute('ingredient') == 27){
            e.detail.body.el.setAttribute('ingredient', '16');
        }
        if(e.detail.body.el.getAttribute('ingredient') == 28){
            e.detail.body.el.setAttribute('ingredient', '18');
        }
        
        playMixingSound(Math.round((Math.random()*6)+1));
        
        deleteObject(scene.querySelectorAll('.ingredients'));
        // console.log('Object has collided with Bowl');
        // console.log(e.detail.body.el);

        // e.detail.target.el;  // Original entity (playerEl).
        // e.detail.body.el;    // Other entity, which playerEl touched.
        // e.detail.contact;    // Stats about the collision (CANNON.ContactEquation).
        // e.detail.contact.ni; // Normal (direction) of the collision (CANNON.Vec3).

        

        // let entity = scene2.querySelectorAll('.ingredients'); //  select all objects in ingredients class
        
    }
});
mixBowlObject.addEventListener('collide', function (e) { // collision event listener
    // console.log('Bowl has collided with body #' + e + '\n' + 'Properties: ' + e.detail.body.el.getAttribute('id'));

    if (e.detail.body.el.getAttribute('collided') && e.detail.body.el.getAttribute('ingredient') > 25 && mixerTimeOut == false) {
        
        e.detail.body.el.setAttribute('collided', 'true'); // set collided to true
        
        if(mixerSpace > 1)
            mixerSpace = 0;
        
        mixer[mixerSpace] = e.detail.body.el.getAttribute('ingredient');
        
        //console.log(mixer);
        
        mixerSpace++;
        
        if((mixer[0] == '26' && mixer[1] == '27') || (mixer[0] == '27' && mixer[1] == '26'))
            createObject(17, 'ingredients', 'obj:#prop-jar_1-obj', 'color:orange; metalness:1.0');

        if((mixer[0] == '27' && mixer[1] == '29') || (mixer[0] == '29' && mixer[1] == '27'))
            createObject(19, 'ingredients', 'obj:#prop-jar_1-obj', 'color:orange; metalness:1.0');

        if((mixer[0] == '30' && mixer[1] == '31') || (mixer[0] == '31' && mixer[1] == '30'))
            createObject(20, 'ingredients', 'obj:#prop-jar_1-obj', 'color:orange; metalness:1.0');

        if((mixer[0] == '30' && mixer[1] == '26') || (mixer[0] == '26' && mixer[1] == '30'))
            createObject(21, 'ingredients', 'obj:#prop-jar_1-obj', 'color:orange; metalness:1.0');

        deleteObject(scene.querySelectorAll('.ingredients'));
        mixerTimeOut = true;
        setTimeout(function(){mixerTimeOut = false;}, 1000);
    }
});


gongObject.addEventListener('collide', function (e) { // collision event listener
    if (e.detail.body.el.getAttribute('id', '#prop-stick') && !e.detail.body.el.getAttribute('ingredient')) {
        playGongSound();
        if(!gameStarted)
            {
            gameStart();
//            console.log("gameStart() gong collision");
            }
        if(resetAllowed == true)
            {
            gameReset();
//            console.log("gameReset() gong collision");
            }
    }
});

//Move objects back to table if they fall off
floorObject.addEventListener('collide', function (e) { // collision event listener    
    if (e.detail.body.el.getAttribute('dynamic-body', true) && e.detail.body.el.getAttribute('class') != "fireworks") {
        let object = document.querySelector('#' + e.detail.body.el.getAttribute('id'));
        
        let x = (Math.random() * 0.5) + 0.4;
        let y = (Math.random() * 0.5) + 0.9;
        let z = (Math.random() * -0.5) - 0.2;
        
        object.body.position.set(x, y, z);
        object.body.velocity.set(0, 0.1, 0);
    }
});