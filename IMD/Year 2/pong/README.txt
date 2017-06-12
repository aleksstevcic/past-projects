PROGRAMS REQUIRED: Fritzing (for the hardware blueprint), Processing, Arduino
HARDWARE REQUIRED: Two ARDUINO REDs.

How to run:

	-Assemble two Arduinos with the according fritzing schematic.

	-Connect them to a computer, compile and run the Processing and Arduino source files.


Description/Behavior:

-Pong, ball speeds up on how many times it's collided with something.
-Paddles controlled with arduino serial communication, using a potentiometer.
-Score points until one reaches 6 points.
-Once 6 points reached, buzzer rhythm played and LED pattern, LCD saying you won, then clears everything and closes program.

KNOWN ERRORS:

-The ball can get stuck between the backside of the paddle ('incomplete' coding on collision, as it only is coded to hit one side of the paddle.)
which makes it accelerate to ludicrously high speeds.


Contributors:

Aleksandar Stevcic
Andrew Thompson
