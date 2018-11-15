-----Yanhua-----
A cooperative WebVR fireworks making game

Yanhua (Fireworks) is a collaborative effort between multiple users to create a stunning fireworks show.

---Created By--- 
Isabelle Chen, William Ferguson, Nick Liznick, Duncan McIntosh, Aleksandar Stevcic
[April 10, 2018]

---Prerequisites--- 
Node.js (9.11.1)

---How To Launch The Game---
Open command prompt in the game path (TermProject/Project)
	Type “node app.js”
	If “Listening On Port: 8080” is output, the server is running
Open a WebVR supported browser (Firefox & Chromium) and navigate to:
	For VR Users:		
		http://localhost:8080/vr.html
	For Mobile users:
		IPv4 Address can be found through the command prompt and typing "ipconfig"		
		[Computer IPv4 Address]:8080/mobile.html
		
---Objective--- 
The VR user needs to create a firework according to the given clues, with the help of mobile users.

---How To Play---
Communicate with the Mobile users as to what ingredients to spawn
	Blue Text = Firework Colour
	Dark Green Text = Firework Shell
	Yellow Text = Firework Shell that must be mixed with first Firework Shell in mixing bowl
	Pink Text = Firework Size

VR:
	Strike the gong with the stickto strart the timer and get the required ingredients
	Grab ingredients and put them in the main bowl
	If there are two clues for Firework Shell (green) they must be mixed in the mixing bowl

Mobile:
	Select an ingredient and send to VR
	The ingredient with the most votes is sent