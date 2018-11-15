 function fireworkMove(){
     var fireworkHolder = document.querySelector('#fireworkHolder'); //Get objects with class 'firework'
     var fireworks = {};
    
     var maxHeight = 100; //Max height a firework can travel in the Y direction
     var speed = 2.5; //Firework vertical speed
     
     if(fireworkTotal > 0){
         for(var i = 0; i <= fireworkTotal; i++){
             fireworks[i] = fireworkHolder.childNodes[i];
            
             if(fireworks[i] != null){
                 if(fireworks[i].body != null){
                     fireworks[i].body.applyImpulse(
                         new CANNON.Vec3((Math.random()*26)-13, speed, -5), //impulse        
                         new CANNON.Vec3().copy(fireworks[i].getAttribute('position')) //world position 
                     );
    
                     if(fireworks[i].object3D.position.y > maxHeight)
                     {
                         particles(fireworks[i]);
                         playFireworkSound(Math.floor((Math.random()*3)+1));
                         deleteFirework(fireworks[i]);

                     } 
                 }
             }  
         }
     }
 }

 function particles(fireworks){
     pPos = "" + fireworks.object3D.position.x + " " + fireworks.object3D.position.y + " " + fireworks.object3D.position.z;
     //rotation will never change cause i think it screws with how the poisiton of it is drawn

     /*

     COLOUR
     1.Aluminum, Magnesum, Phosphorus, Titanium  -White
     2.Barium                                    -Green
     3.Calcium                                   -Orange
     4.Bismuth                                   -Blue
     5.Copper                                    -Blue-Green
     6.Potassium                                 -Violet-Pink
     7.Lithium, Strontium                        -Red
     8.Sodium                                    -Yellow
     9.Antimony                                  -Glitter
     10.Zinc                                     -Smoke


     SHAPE
     15.Chlorate                                 -Star 26
     16.Nitrate                                  -Comet 27
     17.Chlorate+Nitrate                         -Pillbox
     18.Oxide                                    -Crackle Stars 28
     19.Nitrate + Fine Charcoal                  -Willow 29
     20.Perchlorate + Sulfate                    -Twinkler 30 31
     21.Perchlorate + Chlorate                   -Butterfly
    

     SIZE
     18.Shellac                                  -Smallest
     19.Dextrin                                  -Medium
     20.Parlon                                   -Largest
     21.Red Gum                                  -Medium
     */
     //get the individual ingredients
     var color = "#FFFFFF";
     var size = 1;
     var age = 10;
     var positionSpreadVal = [0, 0, 0];
     var positionSpread = "" + positionSpreadVal[0] + " " + positionSpreadVal[1] + " " + positionSpreadVal[2];
     var type = 2;
     var velocitySpreadVal = [0, 0, 0];
     var velocitySpread = "" + velocitySpreadVal[0] + " " + velocitySpreadVal[1] + " " + velocitySpreadVal[2];
     var velocityVal = [0, 0, 0];
     var duration = 0.1;
     var pCount = 5000;
     var maxpCount = 5000;
     var tex = "";

     //COLOUR DETERMINANTS
     switch(fireworks.getAttribute('colorants')){
         case('1'):
             color = "#FFFFFF"
             break;
         case('2'):
             color = "#FFFFFF"
             break;
         case('3'):
             color = "#FFFFFF"
             break;
         case('4'):
             color = "#FFFFFF"
             break;
         case('5'):
             color = "#00FF00"
             break;
         case('6'):
             color = "#FF530D"
             break;
         case('7'):
             color = "#0000FF"
             break;
         case('8'):
             color = "#74FFF1"
             break;
         case('9'):
             color = "#CF92E8"
             break;
         case('10'):
             color = "#FF0000"
             break;
         case('11'):
             color = "#FF0000"
             break;
         case('12'):
             color = "#FFF600"
             break;
         case('13'):
             color = "#FFF6BA"
             break;
         case('14'):
             color = "#C1C1C1"
             break;
         default:
             color = "#FFFFFF"
             break;
     }
    
     switch(fireworks.getAttribute('ingBloom')){
         //star
         case('15'):
             tex = "";
             type = 2;
             size = 1;
             positionSpread = [100, 100, 100];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [100, 100, 100];
             break;
         //comet
         case('16'):
             tex = "assets/textures/ball.png";
             type = 1;
             size = 1;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
         //pillbox
         case('17'):
             tex = "assets/textures/ball.png";
             type = 1;
             size = 1;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
         //crackle stars
         case('18'):
             tex = "";
             type = 2;
             size = 1;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
         //willow
         case('19'):
             tex = "";
             type = 2;
             size = 1;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
         //twinkler
         case('20'):
             tex = "assets/textures/ball.png";
             type = 2;
             size = 1;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
         //butterfly
         case('21'):
             tex = "assets/textures/Butterfly.png";
             type = 2;
             size = 1;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
         default:
             tex = "";
             type = 1;
             size = 0;
             positionSpread = [0, 0, 0];
             //velocityVal = [100, 100, 100];
             velocitySpreadVal = [0, 0, 0];
             break;
     }
    
     switch(fireworks.getAttribute('adhesive')){
         case('22'):
             pCount = 600;
             maxpCount = 5000;
             duration = 0.1;
             break;
         case('23'):
             pCount = 1200;
             maxpCount = 5000;
             duration = 0.1;
             break;
         case('24'):
             pCount = 8000;
             maxpCount = 8000;
             duration = 0.45;
             break;
         case('25'):
             pCount = 1200;
             maxpCount = 5000;
             duration = 0.1;
             break;
         default:
             pCount = 600;
             maxpCount = 5000;
             duration = 0.1;
             break;
     }

     velocitySpread = "" + velocitySpreadVal[0] + " " + velocitySpreadVal[1] + " " + velocitySpreadVal[2];
     positionSpread = "" + positionSpreadVal[0] + " " + positionSpreadVal[1] + " " + positionSpreadVal[2];

     //very long but it works and incorporates all the variables -- now we can modulate it with other factors such as material types etc
     var attr = "size:" + size + ";texture:" + tex + ";maxAge:" + age + ";color:" + color + ";positionSpread:" + positionSpread + ";type:" + type + ";velocityValue: 0 0 0;velocitySpread:" + velocitySpread + ";duration:" + duration + ";particleCount:" + pCount + ";maxParticleCount:" + maxpCount + ";accelerationValue:0 0 0;";                 

     //Drawing Phase
     switch(fireworks.getAttribute('ingBloom')){
         //star
         case('15'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             //console.log(hierarchy.getAttribute('sound'));
             scene.appendChild(hierarchy);
                 var p = new particle(fireworkTotal, "0 0 0", "0 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             hierarchy.setAttribute('position', pPos);
             break;
         //comet
         case('16'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
             //1st axis
             for(var i=1; i<7; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "" + i*(360.0/6) + " 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             //2nd axis
             for(var i=1; i<7; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "0 0 " + i*(360.0/6) + "", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             hierarchy.setAttribute('position', pPos);
             break;
         //pillbox
         case('17'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
             //1st axis
             for(var i=1; i<3; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "" + i*(360.0/2) + " 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             hierarchy.setAttribute('position', pPos);
             break;
         //crackle stars
         case('18'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
             //1st axis
             for(var i=1; i<4; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "" + i*(360.0/3) + " 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             hierarchy.setAttribute('rotation', "0 90 0");
             hierarchy.setAttribute('position', pPos);
             break;
         //willow
         case('19'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
             //1st axis
             for(var i=1; i<6; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "" + i*(360.0/6) + " 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             //2nd axis
             for(var i=1; i<7; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "0 0 " + i*(360.0/6) + "", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             hierarchy.setAttribute('position', pPos);
             break;
         //twinkler
         case('20'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
             //all axis
             for(var i=1; i<7; i++){
                 var randx = Math.random() * 360;
                 var randy = Math.random() * 360;
                 var randz = Math.random() * 360;
                 var p = new particle(fireworkTotal, "0 0 0", "" + randx + " " + randy + " " + randz, attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             hierarchy.setAttribute('position', pPos);
             break;
         //butterfly
         case('21'):
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
             //1st axis
             for(var i=1; i<5; i++){
                 var p = new particle(fireworkTotal, "0 0 0", "" + ((i*(360.0/4)) + 360.0/8) + " 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             }
             hierarchy.setAttribute('rotation', "0 90 0");
             hierarchy.setAttribute('position', pPos);
             break;
         default:
             var hierarchy = document.createElement('a-entity');
             hierarchy.setAttribute('id', "ParticleGroup_" + fireworkTotal);
             scene.appendChild(hierarchy);
                 var p = new particle(fireworkTotal, "0 0 0", "0 0 0", attr);
                 p.apply(hierarchy);
                 p.timeOut(p, 10000);
             hierarchy.setAttribute('position', pPos);
             break;
     }
 }

 function createFirework(col, blo, adh){
     fireworkTotal++;
     //console.log(fireworkTotal);
    
     let object = 'fireworks';
    
     let newFirework = document.createElement('a-image');
     let fireworkHolder = document.querySelector('#fireworkHolder'); //Get objects with class 'firework'
    
     newFirework.setAttribute('class', object);
     newFirework.setAttribute('id', 'firework_' + fireworkTotal);

     var currNumFireworks = document.querySelectorAll('.' + object).length;

     var fireworkPosX = (currNumFireworks*5) - 5;
     var fireworkPosZ = -49 - (currNumFireworks);
     newFirework.setAttribute('position', "" + fireworkPosX + " 0 " + fireworkPosZ);
     newFirework.setAttribute('scale', '0.5 1.8 1');
     newFirework.setAttribute('material', 'color:green; depthWrite: false; shader: flat; side: double; transparent: true; src: #fireworkImg'); //Temporary Color
     newFirework.setAttribute('shadow', 'cast:false; receive:false');
     newFirework.setAttribute('mass', 5.0);
    
     newFirework.setAttribute('colorants', col);
     newFirework.setAttribute('ingBloom', blo);
     newFirework.setAttribute('adhesive', adh);

     // Append projectile to the scene
     fireworkHolder.appendChild(newFirework);

     newFirework.setAttribute('dynamic-body', 'angularDamping:1.0');
 }

function spawnFirework(entity){ //For when all ingredients are consumed to create a firework
    var ing = entity.getAttribute('ingredient');

    if(ing <= 14)
       colorant = ing;
    if(ing <= 21 && ing >=15)
       bloom = ing;
    if(ing <= 25 && ing >=22)
       adhesive = ing;
    if(colorant > -1 && bloom > -1 && adhesive > -1){
        createFirework(colorant, bloom, adhesive);
        currentFirework++;
        if(colorant == desColorant[1] && bloom == desBloom[1] && adhesive == desAdhesive[1]){
            if(currentFirework == 1)
                fireworkSuccess[1] = true;
            if(currentFirework == 2)
                fireworkSuccess[2] = true;
            if(currentFirework == 3)
                fireworkSuccess[3] = true;
        }else{
            if(currentFirework == 1)
                fireworkSuccess[1] = false;
            if(currentFirework == 2)
                fireworkSuccess[2] = false;
            if(currentFirework == 3)
                fireworkSuccess[3] = false;
        }
        
        fireworksIconUpdate();

        colorant = -1;
        bloom = -1;
        adhesive = -1;

        randomRequirements();
    }
}

function fireworksIconUpdate(){ 
    var fireworkIcon;
    
    for(var i = 1; i <= 3; i++){
        if(i == 1)
            fireworkIcon = document.querySelector('#fireworkIcon01');
        else if(i == 2)
            fireworkIcon = document.querySelector('#fireworkIcon02');
        else if(i == 3)
            fireworkIcon = document.querySelector('#fireworkIcon03');
        
        if(fireworkIcon != null){
            if(fireworkSuccess[i] && fireworkSuccess[i] != null)
                fireworkIcon.setAttribute('material', 'src:#fireworkWinImg');
            else if(!fireworkSuccess[i] && fireworkSuccess[i] != null)
                fireworkIcon.setAttribute('material', 'src:#fireworkFailImg');
            else
                fireworkIcon.setAttribute('material', 'src:#fireworkPassiveImg');
        }
    }
}

 function deleteFirework(fEntity){
    if(fEntity != null)
         fEntity.parentNode.removeChild(fEntity);
 }

 //https://github.com/donmccurdy/aframe-physics-system#using-the-cannonjs-api
 //https://github.com/donmccurdy/aframe-physics-system/issues/46
 //https://freesound.org/people/InspectorJ/sounds/328861/