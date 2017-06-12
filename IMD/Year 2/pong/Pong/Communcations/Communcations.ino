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
which makes it accelerate to ludicrous speeds.

*/

//code formatting done by Aleksandar (to look a bit prettier)

//Include library which controls the liquid crystal display
#include <LiquidCrystal.h>

//Define an LCD object, defining all used pins
LiquidCrystal lcd(12,11,5,4,3,2);

//define all other pins that are used (except for the buzzer)
int R = 13;
int G = 7;
int B = 8;
int curr, prev;
int temp, value;
const int potPin = A0;
int potValue;


//setup
void setup() {

  //running at 115200 baud, seemingly faster communication
  Serial.begin(115200);

  //define the LCD's columns and rows used
  lcd.begin(16,2);

  //define RGB pins
  pinMode(13, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
  
  //Serial.println("Final Project");
}

//* Concept/research by Aleksandar, applications (such as which letters and how many) by Andrew

//main code
void loop() {

  //output a consistent brightness with the LCD (has a 'waterfall' effect, speculating that it's because PWM)
  analogWrite(10, 100);

  //gather current time of program
  curr = millis();

  //read the value of the potentiometer, then write it to the serial port if 75 milliseconds have passed (this way processing can read it without overloading)
  potValue = map(analogRead(potPin), 0, 1023, 0, 255);
  
  if(curr - prev > 75){
   Serial.write(potValue);
   prev = curr;
  }
      

  //if the serial port is available
  if(Serial.available() > 0){
    //value will be read as a DECIMAL value rather than normal character.
    //
    //DECIMAL
    //
    value = Serial.read();

    if(value == 82) //capital R (red LED) on
      digitalWrite(R,HIGH);
      
    if(value == 114) //lowercase r (red LED) off
      digitalWrite(R,LOW);

    if(value == 71) //capital G (green LED) on
      digitalWrite(G,HIGH);

    if(value == 103) //lowercase g (green LED) off
      digitalWrite(G,LOW);

    if(value == 66) //capital B (blue LED) on
      digitalWrite(B,HIGH);
    
    if(value == 98) //lowercase b (blue LED) off
      digitalWrite(B,LOW);

    if(value == 84) //capital T (buzz tone for wall collision)
      tone(9, 500, 100);

    if(value == 48){ // 0 , outputs number "0"
      lcd.clear();
      lcd.write("0");
    }

    if(value == 49){ // 1 , outputs number "1"
      lcd.clear();
      lcd.write("1");
    }

    if(value == 50){ // 2 , outputs number "2"
      lcd.clear();
      lcd.write("2");
    }

    if(value == 51){ // 3 , outputs number "3"
      lcd.clear();
      lcd.write("3");
    }

    if(value == 52){ // 4 , outputs number "4"
      lcd.clear();
      lcd.write("4");
    }

    if(value == 53){ // 5 , outputs number "5"
      lcd.clear();
      lcd.write("5");
    }

    if(value == 54){ //6 , outputs "You Win!"
      lcd.clear();
      lcd.write("You Win!");
    }

    if(value == 55){ //7 , outputs "You Lose!"
      lcd.clear();
      lcd.write("You Lose!");
    }

    if(value == 87) //capital W (plays winning tone)
      tone(9,800);

    if(value == 119) //lowercase w (turns off winning tone)
      tone(9,800,1);

    if(value == 33){ // ! exclamation point , turns everything to off
      lcd.clear();
      digitalWrite(R,LOW);
      digitalWrite(G,LOW);
      digitalWrite(B,LOW);
    }
    

     //constantly reads while serial is on
     while(Serial.available() > 0)
       Serial.read();
         
  }
}
