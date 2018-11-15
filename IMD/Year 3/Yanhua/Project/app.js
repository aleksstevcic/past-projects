const express   = require('express');
const app       = express();
const http      = require('http');
const server    = require('http').createServer(app);  
const io        = require('socket.io')(server);

var realSpace = 0;
var arrValue  = 0;
var voteArray = new Array();
var arrSpace  = null;
var vote 	  = false;
var users	  = 0;

const LISTEN_PORT = 8080; // arbitrary value port number
    
server.listen(LISTEN_PORT);
app.use(express.static(__dirname + '/public')); // tell express where the webpages are coming from

console.log("Listening on port: " + LISTEN_PORT);

// ROUTES
/*app.get('/desktop', function(req, res){
	res.sendFile(__dirname + '/public/desktop.html'); 
});*/

app.get('/vr', function(req, res){
	res.sendFile(__dirname + '/public/vr.html'); 
 });

app.get('/mobile', function(req, res){ 
	res.sendFile(__dirname + '/public/mobile.html');
});

// SOCKET.IO
io.on('connection', (socket) => {

	// console.log(socket.id + " connected");
	users++;
	// console.log(users + " total user(s)");
	io.sockets.emit("userChanged", { id: users });

	socket.on('disconnect', () => {
		// console.log(socket.id + " disconnected");
		users--;
		// console.log(users + " total user(s)");
		io.sockets.emit("userChanged", { id: users });
	});
	
	socket.on("clearArray", (data) => {
		arrSpace = null;
		// console.log("Array cleared");
	});

	// send to listener, don't forget commas!
	socket.on("selection", (data) => {

		// console.log(data.id + " vote recieved");

		if(vote === true)
		{
			voteArray[realSpace] = data.id;
			realSpace++;
		}
		
		if(vote === false)
		{
			vote = true;
			voteArray[realSpace] = data.id;
			realSpace++;

			vote = false;
			tempArr = new Array();
			
			for(i = 0; i < 32; i++)
			{
				tempArr[i] = 0;
			}

			for(i = 0; i < voteArray.length; i++)
			{
				switch(voteArray[i]){
					case("Aluminum"):
						tempArr[0] += 1;
						break;
					case("Magnesium"):
						tempArr[1] += 1;
						break;
					case("Phosphorus"):
						tempArr[2] += 1;
						break;
					case("Titanium"):
						tempArr[3] += 1;
						break;
					case("Barium"):
						tempArr[4] += 1;
						break;
					case("Calcium"):
						tempArr[5] += 1;
						break;
					case("Bismuth"):
						tempArr[6] += 1;
						break;
					case("Copper"):
						tempArr[7] += 1;
						break;
					case("Potassium"):
						tempArr[8] += 1;
						break;
					case("Lithium"):
						tempArr[9] += 1;
						break;
					case("Strontium"):
						tempArr[10] += 1;
						break;
					case("Sodium"):
						tempArr[11] += 1;
						break;
					case("Antimony"):
						tempArr[12] += 1;
						break;
					case("Zinc"):
						tempArr[13] += 1;
						break;
						
					
						
					case("Chlorate"):
						tempArr[25] += 1;
						break;
					case("Nitrate"):
						tempArr[26] += 1;
						break;
					case("Oxide"):
						tempArr[27] += 1;
						break;
					case("Charcoal"):
						tempArr[28] += 1;
						break;
					case("Perchlorate"):
						tempArr[29] += 1;
						break;
					case("Sulfate"):
						tempArr[30] += 1;
						break;
						
						
						
					case("Shellac"):
						tempArr[21] += 1;
						break;
					case("Dextrin"):
						tempArr[22] += 1;
						break;
					case("Parlon"):
						tempArr[23] += 1;
						break;
					case("Red Gum"):
						tempArr[24] += 1;
						break;
						
					default:
						break;
				}
			}

			for(i = 0; i < tempArr.length; i++)
			{
				if(i == 0)
				{
					arrValue = tempArr[i];
					arrSpace = i;
				}

				else
				{
					if(tempArr[i] > arrValue)
					{
						arrValue = tempArr[i];
						arrSpace = i;
					}
				}
			}

			arrSpace = parseInt(arrSpace);
		}
	});

	socket.on("spawnItem", (data) => {
		switch(arrSpace)
		{
			case(0):
				console.log("Aluminum won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 1,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(1):
				console.log("Magnesium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 2,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(2):
				console.log("Phosphorus won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 3,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(3):
				console.log("Titanium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 4,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(4):
				console.log("Barium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 5,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(5):
				console.log("Calcium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 6,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(6):
				console.log("Bismuth won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 7,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(7):
				console.log("Copper won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 8,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(8):
				console.log("Potassium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 9,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(9):
				console.log("Lithium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 10,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(10):
				console.log("Strontium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 11,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(11):
				console.log("Sodium won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 12,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(12):
				console.log("Antimony won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 13,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
			case(13):
				console.log("Zinc won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 14,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_1-obj',
					objectMaterial:	  'color:purple',
				});
				arrSpace = null;
				break;
				
			
				
			case(25):
				console.log("Chlorate won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 26,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_2-obj',
					objectMaterial:	  'color:green',
				});
				arrSpace = null;
				break;
			case(26):
				console.log("Nitrate won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 27,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_2-obj',
					objectMaterial:	  'color:green',
				});
				arrSpace = null;
				break;
			case(27):
				console.log("Oxide won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 28,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_2-obj',
					objectMaterial:	  'color:green',
				});
				arrSpace = null;
				break;
			case(28):
				console.log("Charcoal won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 29,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_2-obj',
					objectMaterial:	  'color:green',
				});
				arrSpace = null;
				break;
			case(29):
				console.log("Perchlorate won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 30,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_2-obj',
					objectMaterial:	  'color:green',
				});
				arrSpace = null;
				break;
			case(30):
				console.log("Sulfate won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 31,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_2-obj',
					objectMaterial:	  'color:green',
				});
				arrSpace = null;
				break;
				
				
				
			case(21):
				console.log("Shellac won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 22,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_3-obj',
					objectMaterial:	  'color:blue',
				});
				arrSpace = null;
				break;
			case(22):
				console.log("Dextrin won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 23,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_3-obj',
					objectMaterial:	  'color:blue',
				});
				arrSpace = null;
				break;
			case(23):
				console.log("Parlon won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 24,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_3-obj',
					objectMaterial:	  'color:blue',
				});
				arrSpace = null;
				break;
			case(24):
				console.log("Red Gum won the vote");
				io.sockets.emit("createObject", {
					objectIngredient: 25,
					objectClass:	  'ingredients',
					objectModel:	  'obj:#prop-jar_3-obj',
					objectMaterial:	  'color:blue',
				});
				arrSpace = null;
				break;
				
			default:
				break;
		}

		realSpace = 0;
		voteArray = new Array();
		tempArr   = new Array();
	});

	socket.on("gameHasEnded", (data) => {
        // console.log("gameHasEnded app.js ping");
		io.sockets.emit("endGame", { gameState: data.gameState });
	});
	
	socket.on("gameHasStarted", (data) => {
        // console.log("gameHasStarted app.js ping");
		io.sockets.emit("startGame", { gameState: data.gameState });
	});

	socket.on("gameHasReset", (data) => {
        // console.log("gameHasReset app.js ping");
		io.sockets.emit("resetGame", { gameState: data.gameState });
	});
});