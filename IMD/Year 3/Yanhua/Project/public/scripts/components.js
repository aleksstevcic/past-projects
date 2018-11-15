//http://ngokevin.com/blog/aframe-component/
AFRAME.registerComponent('fireworks', {
    init: function () {},
    
    tick: function () {
        if(fireworkOn){
            fireworkMove();
        }
    }
});

AFRAME.registerComponent('collide-object', {
    init: function () {},
    
    schema: {
        collided: {default: 'false'}
    }
});

AFRAME.registerComponent('requirements', {
  schema: {},
  init: function () {
      let value_1_1 = document.querySelector('#req-1-text-1');
      let value_1_2 = document.querySelector('#req-1-text-2');
      let value_2_1 = document.querySelector('#req-2-text-1');
      let value_2_2 = document.querySelector('#req-2-text-2');
      let value_3_1 = document.querySelector('#req-3-text-1');
      let value_3_2 = document.querySelector('#req-3-text-2');
      value_1_1.setAttribute('text', 'value: ');
      value_1_2.setAttribute('text', 'value: ');
      value_2_1.setAttribute('text', 'value: ');
      value_2_2.setAttribute('text', 'value: ');
      value_3_1.setAttribute('text', 'value: ');
      value_3_2.setAttribute('text', 'value: ');
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {}
});

AFRAME.registerComponent('timer', {
  schema: {},
  init: function () {
      let timer = document.querySelector('#timer-text');
      let timeLeft = roundTime;
      
      const timerLoop = function(){
          if(timeLeft > 0){
            timeLeft--;
            timer.setAttribute('text', 'value:' + timeLeft);
          }
          else{
              timer.emit('timerEnd');
          }
      }
      setInterval(timerLoop, 1000);
  },
  update: function () {},
  tick: function () {},
  remove: function () {
      //clearInterval(timerLoop);
  },
  pause: function () {},
  play: function () {}
});