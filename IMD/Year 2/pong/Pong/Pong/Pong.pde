/*

Final Project
Aleksandar Stevcic
Andrew Thompson

December 2016


Circuit:

  RGB -> R on pin 13
  RGB -> G on pin 7
  RGB -> B on pin 8
  LCD -> on pins 12,11,5,4,3,2
  Buzzer -> pin 9
  potentiometer -> on analog pin A0
  LCD (brightness control) -> on pin 10


Description/Behavior:

Pong, ball speeds up on how many times it's collided with something.
Paddles controlled with arduino serial communication, using a potentiometer.
Score points until one reaches 6 points.
Once 6 points reached, buzzer rhythm played and LED pattern, LCD saying you won, then clears everything and closes program.

KNOWN ERRORS:

-The ball can get stuck between the backside of the paddle ('incomplete' coding on collision, as it only is coded to hit one side of the paddle.)
which makes it accelerate to ludicrously high speeds.

*/

//code formatting done by Aleksandar (to look a bit prettier)

//import serial communications
import processing.serial.*;


float t, t2;

//defining window width and height, since laziness of typing numbers later
int ww = 640;
int wh = 480;

//define global variables for time measurement without pausing program
int time = 0, prevtime = 0;
//random number generator variable
float rand;
//used so the winning rhythm only plays once
boolean sound = false;
//count how many times the LED flashes in win condition before shutting off
int count = 0;


//*Aleksandar

//Player objects, these are going to be the paddle's properties
class Player{
  
  //x,y positions, defined width and height, and score variables
  float x,y;
  int w,h;
  int score;
  
  //Constructor, set some default values to eliminate nullity
  Player(){
    x = 300;
    y = 150;
    w = 20;
    h = 90;
  }
  
  //draw function to draw the paddles
  void Draw(){
    rect(x,y,w,h);
  }
  
  //move function, will take in the potentiometer value and set your y value to it
  void Move(float temp){
    y = temp;
  }
  
}

//Ball object
class Ball{
  //x,y positions, sx, sy define speed
  float x,y,sx,sy;
  
  //Constructor, place it in the middle of the window. Choose random speeds as the initial ball spawn
  Ball(){
    x = ww/2;
    y = wh/2;
    rand = random(0, 359);
    sx = 4*cos(radians(rand));
    rand = random(0, 359);
    sy = 2*sin(radians(rand));
  }
  
  
  //*Andrew
  
  //Move function, all calculation+collision happens in here to save clutter in the main function
  void Move(){
    
    //if it's inside the window, move the object depending on it's current speed values
    if(x <= ww && x >= 0){
      x+= sx;
      y+= sy;
    }
    
    //If player 1 scores, reset ball speeds and position, choose random direction, but towards opposite side
    if(x >= ww){
      sx  = -3;
      rand = random(0, 359);
      sy = 2*sin(radians(rand));
      x = ww/2;
      y = wh/2;
      player1.score++;
    }
    
    //If player 2 scores, reset ball speeds and position, choose random direction, but towards opposite side
    if(x <= 0){
      sx = 3;
      rand = random(0, 359);
      sy = 2*sin(radians(rand));
      x = ww/2;
      y = wh/2;
      player2.score++;
    }
    
    //if the ball collides with player 1's paddle, reverse x speed direction and a bit more, and play a tone
    if(x <= player1.x + player1.w + 8.5 && y <= player1.y + player1.h && y >= player1.y){
      ard1.write("T");
      sx*= -1.07;
      sy*= 1.07;   
    }
    
    //if the ball collides with player 2's paddle, reverse x speed direction and a bit more, and play a tone
    if(x >= player2.x - 8.5 && y <= player2.y + player2.h && y >= player2.y && x <= player2.x + player2.w){
      ard2.write("T");
      sx *= -1.07;
      sy *= 1.07;
    }
    
   //if the ball collides with the top, increase speed and play a tone on both controllers
    if(y <= 8.5){
      sx*= 1.07;
      sy*= -1.07;
      ard1.write("T");
      delay(1);
      ard2.write("T");
    }
    
    //if the ball collides with the bottom, increase speed and play a tone on both controllers
    if (y >= wh - 8.5){
      sx*= 1.07;
      sy*= -1.07;
      ard1.write("T");
      delay(1);
      ard2.write("T");
    }
    
  }
  
  //Draw function, draws ball
  void Draw(){
    ellipse(x,y,17,17);
  }
  
}


//initiate all global objects
Player player1 = new Player();
Player player2 = new Player();
Serial ard1;
Serial ard2;
Ball ball = new Ball();


//setup function
void setup(){
  
  //set sound to false (redundant, as set to false at the top)
  sound = false;
  //define window width and height (variables cant be used here :(  )
  size(640,480);
  //set the background to black
  background(0,0,0);
  
  //set player paddle positions, relative to how far away they are from their side of the screen
  player1.x = 50; //50 pixels away from the left
  player2.x = 570; //50 pixels away from the right (640 - 50 - paddle width)
  
  
  ard1 = new Serial(this, Serial.list()[0], 115200);
  ard2 = new Serial(this, Serial.list()[1], 115200);
  //player 1 corresponds to ard1, etc
  
  //wait for serial ports to initiate before starting the match
  delay(2000);
}


//*Main function collaborative between both of us, fragmented contribution


//main function
void draw(){
  
  //clear
  background(0,0,0);
  
  
  //reading + applying phase

  //if the player's score is less than 6, then run the game**
  if(player1.score < 6 && player2.score < 6){
    
    //if data has been sent to the serial port, get information from it (gets potentiometer values from it)
    if(ard1.available() > 0){
      t = map(ard1.read(), 0, 255, 0, 395);
    }
    
    if(ard2.available() > 0){
      t2 = map(ard2.read(), 0, 255, 0, 395);
    }
    
    //move the player up or down, depending on the value that the potentiometer reads
    player1.Move(t);
    player2.Move(t2);
    //move the ball (contains all collition and computation in here)
    ball.Move();
    
    //drawing phase
    
    //write the score to the player's respective LCD
    ard1.write(str(player1.score));
    ard2.write(str(player2.score));
    
    //draw everything
    player1.Draw();
    player2.Draw();
    ball.Draw();
    
  }
  
  
  //**else run the win condition
  else{
    
    //output black background
    background(0,0,0);
    
    //start recording time
    time = millis();
    
    //if player 1 won
    if(player1.score > 5){
      
      //play the winning rhythm once
      if(sound == false){
        ard1.write("W");
        delay(100);
        ard1.write("w");
        delay(50);
        ard1.write("W");
        delay(1000);
        ard1.write("w");
        sound = true;
      }
    
      //if the light has blinked 5 times, reset the arduino displays, end the program
      if(count >= 5){
        ard1.write("!");
        delay(1);
        ard2.write("!");
        delay(1);
        System.exit(0);
      }
      
      //this if plays the pattern, then adds 1 to count (this pattern plays 5 times)
      if(time - prevtime > 100){
        ard1.write("R");
        if(time - prevtime > 200){
          ard1.write("G");
          if(time - prevtime > 300){
            ard1.write("B");
            if(time - prevtime > 400){
              prevtime = time;
              ard1.write("r");
              delay(1);
              ard1.write("g");
              delay(1);
              ard1.write("b");
              delay(1);
              count++;
            }
          }
        }
      }
      
      //output "you win" and "you lose" on respective boards
      ard1.write("6");
      delay(1);
      ard2.write("7");
      delay(1);
      
    }
    
    //same as last, but for player 2
    else if(player2.score > 5){
      
      if(sound == false){
      ard2.write("W");
      delay(100);
      ard2.write("w");
      delay(50);
      ard2.write("W");
      delay(1000);
      ard2.write("w");
      sound = true;
      }
    
      if(count >= 5){
        ard1.write("!");
        ard2.write("!");
        System.exit(0);
      }
      
      if(time - prevtime > 100){
        ard2.write("R");
        if(time - prevtime > 200){
          ard2.write("G");
          if(time - prevtime > 300){
            ard2.write("B");
            if(time - prevtime > 400){
              prevtime = time;
              ard2.write("r");
              delay(1);
              ard2.write("g");
              delay(1);
              ard2.write("b");
              delay(1);
              count++;
            }
          }
        }
      }
      
      ard2.write("6");
      delay(1);
      ard1.write("7");
      delay(1);
      
    }
  }
}