//DOCUMENT

//SCENE
const scene = document.querySelector('a-scene');

//GAME
var gameStarted = false;
var gameEnded   = false;
var resetAllowed = false;

var roundTime = 360; //Time for game (Default: 180)

//INGREDIENTS
var colorant = -1;
var bloom = -1;
var adhesive = -1;
var desColorant = {};
var desBloom = {};
var desAdhesive = {};

var mixer = [0, 0];
var mixerSpace = 0;

var mixerTimeOut = false;

let objectTotal = 0;

//OBJECT COLLISION
var bowlObject = scene.querySelector('#prop-bowl-collision'); // select bowl collision object
var mixBowlObject = scene.querySelector('#prop-mixBowl-collision'); //select mixing bowl collision object
var gongObject = scene.querySelector('#prop-gong');           // select gong object
var floorObject = scene.querySelector('#floor');              // select floor

//Firework + Particle Values
let fireworkTotal = 0;
let count = 0;
let fireworkOn = false;
let fireworkSuccess = [];
let currentFirework = 0;

var socket = io();