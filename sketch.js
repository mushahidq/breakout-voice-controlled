var paddle;
var ball;
var bricks = [];
var playingGame = false;
var youWin = false;
let score = 0;
let lives = 3;
let livesRestart = false;

let soundClassifier;

function preload() {
  const options = { probabilityThreshold: 0.85 };
  soundClassifier = ml5.soundClassifier('SpeechCommands18W', options);
}

function setup() {
  createCanvas(640, 480);
  paddle = new Paddle();
  ball = new Ball();

  for (let i = 0; i < 20; i++) {
    bricks.push(new Brick());
  }
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  console.log(results[0].label, results[0].confidence);
  if (results[0].label === 'left') {
    paddle.isMovingRight = false;
    paddle.isMovingLeft = true;
    setTimeout(100, () => {
      paddle.isMovingLeft = false;
      paddle.isMovingRight = false;  
    });
  }
  if (results[0].label === 'right') {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = true;
    setTimeout(100, () => {
      paddle.isMovingLeft = false;
      paddle.isMovingRight = false;  
    });
  }
  if (results[0].label === 'go') {
    if (livesRestart) {
      livesRestart = false
      circle.x = moveMent + 50
      circle.y = 380
    }
    if (!playingGame) {
      paddle.isMovingLeft = false;
      paddle.isMovingRight = false;  
      playingGame = true;
      youWin = false;
      if (bricks.length === 0) {
        for (var i = 0; i < bricks.length; i++) {
          bricks.push(new Bricks());
        }
      }
    }
    
  }
  if (results[0].label == 'stop') {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;  
  }
}

function keyPressed() {
  if (key === "a" || key === "A" || keyCode === LEFT_ARROW) {
    paddle.isMovingLeft = true;
  } else if (key === "d" || key === "D" || keyCode === RIGHT_ARROW) {
    paddle.isMovingRight = true;
  } else if (key === "s" || key === "S" || key === " ") {
    playingGame = true;
    youWin = false;
    if (bricks.length === 0) {
      for (var i = 0; i < bricks.length; i++) {
        bricks.push(new Bricks());
      }
    }
  }
}


function draw() {
  background('black');
  paddle.display();
  ball.display();
  if (playingGame) {
    paddle.update();
    paddle.checkEdges();
    ball.update();
    ball.checkEdges();
  }

  if (ball.meets(paddle) && ball.direction.y > 0) {
    ball.direction.y *= -1;
  }

  for (var j = bricks.length - 1; j >= 0; j--) {
    if (ball.hits(bricks[j])) {
      if (bricks[j].r > 20) {
        bricks[j].r = bricks[j].r / 2;
      } else {
        bricks.splice(j, 1);
      }
      ball.direction.y *= -1;
    } else {
      bricks[j].display();
    }
  }
  
  if (ball.pos.y > height) {
    playingGame = false;
    ball.pos = createVector(width / 2, height / 2);
  }
  
  if (bricks.length === 0) {
    youWin = true;
    playingGame = false;
  }
  
  if (youWin) {
    textSize(32);
    fill(0);
    noStroke();
    text("You win!", width / 2 - 50, 80);
  }
}