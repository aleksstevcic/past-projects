function createObject(objectIngredient, objectClass, objectModel, objectMaterial) {
    
    objectTotal++;
    //position="2.55 2.3 -4"
    
    let x = (Math.random() * 1.5) + 1.0;
    let y = (Math.random() * 3.0) + 2.3;
    let z = (Math.random() * -1.0) - 3.0;

    objectPosition = "" + x + " " + y + " " + z + "";
    objectScale    = '1 1 1';
    object         = 'object';

    let newEntity = document.createElement('a-entity'); // create new entity
    let holder = document.querySelector('#objectHolder'); // create new holder

    newEntity.setAttribute('id',           object + objectTotal);
    newEntity.setAttribute('ingredient',   objectIngredient);
    newEntity.setAttribute('class',        objectClass);
    newEntity.setAttribute('obj-model',    objectModel);
    newEntity.setAttribute('position',     objectPosition);
    newEntity.setAttribute('scale',        objectScale);
    newEntity.setAttribute('material',     objectMaterial);
    newEntity.setAttribute('mixin',        object);

    newEntity.setAttribute('collided',     'false');
    newEntity.setAttribute('dynamic-body', 'mass:5');

    newEntity.setAttribute('grabbable',    true);
    newEntity.setAttribute('stretchable',  true);
    newEntity.setAttribute('hoverable',    true);
    
    newEntity.setAttribute('collision-filter', "group: objects; collidesWith: default, hands, objects, stick");
    holder.appendChild(newEntity); // append entity to holder
}

function deleteObject(entity){
    
    handLeft = document.querySelector('#leftHand');
    handRight = document.querySelector('#rightHand');
    
    handLeft.addEventListener('gripup', function() {
        deleteEntity(entity);
    });
    handRight.addEventListener('gripup', function() {
        deleteEntity(entity);
    });
}

function deleteEntity(entity){
    for (var i = 0; i < entity.length; i++) {
        // console.log(entity[i].getAttribute('ingredient'));

        if (entity[i].getAttribute('collided') === 'true'){ // delete only if collided = true
            spawnFirework(entity[i]); //In Fireworks.js
            
            entity[i].setAttribute('position', '-10, -10, -10');
            entity[i].body.position.set(-10, -10, -10);
            entity[i].body.velocity.set(0, 0.1, 0);
            entity[i].setAttribute('collision-filter', "group: objects; collidesWith:"); //Stop colliding
            entity[i].setAttribute('collided', 'false');
            
            if(entity[i].parentNode != null && entity[i] != null)
                entity[i].parentNode.removeChild(entity[i]);
        }                              
    }
}

// https://github.com/donmccurdy/aframe-physics-system#using-the-cannonjs-api
// https://github.com/donmccurdy/aframe-physics-system/issues/46