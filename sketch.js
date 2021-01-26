var canvas;

var gameState = 0
var contestantCount
var database
var quiz
var question
var contestant, allContestants
var answer = 0


function preload() {
  bg = loadImage("quiz.jpg")
  result = loadImage("win.jpg")
}

function setup() {
  canvas = createCanvas(890, 400);
  database = firebase.database();

  quiz = new Quiz()
  quiz.getState()
  quiz.start()
}


function draw() {
  background(bg);
  if (contestantCount === 4) {
    quiz.update(1);
  }
  if (gameState === 1) {
    clear();
    quiz.play();
  }



  // text(mouseX+" ," +mouseY, mouseX,mouseY)
}
