let name1 = document.getElementById("name1");
let name2 = document.getElementById("name2");
let start = document.getElementById("Start");
let restrat = document.getElementById("Restart");
let roll1 = document.getElementById("Roll-btn1");
let roll2 = document.getElementById("Roll-btn2");
let player1 = document.getElementById("player1-h1");
let player2 = document.getElementById("player2-h1");
let player1samp = document.getElementById("player1-samp");
let player2samp = document.getElementById("player2-samp");
let player1Img = document.getElementById("player1Img");
let player2Img = document.getElementById("player2Img");
let p1Score = document.getElementById("p1-score");
let p2Score = document.getElementById("p2-score");
let scoreValue1 = 0;
let scoreValue2 = 0;

function ld() {
  start.disabled = true;
}

function winGame()
{
   alert("win the game")
}

function el() {
  // document.getElementById("Strat").disabble=false;
  start.disabled = false;
  setTimeout(ld, 4000);
}

function set() {
  if (name1.value !== "" && name2.value !== "") {
    start.disabled = false;
    console.log(name2.value);
  } else {
    start.disabled = true;
    console.log("no");
    return;
  }
}
function gamestart() {
  name1.disabled=true;
  name2.disabled=true;
  start.disabled = true;
  let p = Math.ceil(Math.random() * 2);

  console.log(p);
  player1.innerHTML = name1.value;
  player2.innerHTML = name2.value;
  player1samp.innerHTML = name1.value;
  player2samp.innerHTML = name2.value;
  console.log(p);
  if(p<=1)
  {
    roll1.disabled = false;
  }else{
    roll2.disabled = false;
  }
  
  restrat.disabled = false;
}

function StartingGame() {
  let p = Math.ceil(Math.random() * 6);

  if (p == 1) {
    player1Img.src = "dice1.jpg";
  } else if (p == 2) {
    player1Img.src = "dice2.jpg";
  } else if (p == 3) {
    player1Img.src = "dice3.jpg";
  } else if (p == 4) {
    player1Img.src = "dice4.jpg";
  } else if (p == 5) {
    player1Img.src = "dice5.jpg";
  } else if (p == 6) {
    player1Img.src = "dice6.jpg";
  } else {
  }
  console.log(p);

  if (p + scoreValue1 <= 50) {
  } else {
    roll1.disabled = true;
    roll2.disabled = false;
    return 2;
  }

  scoreValue1 = scoreValue1 + p;

  p1Score.innerHTML = scoreValue1;

  if (scoreValue1 == 50) {
    winGame();
    reset();
  }
  if (p == 6) {
    roll1.disabled = true;
    roll2.disabled = false;
    return 2;
  }

  // player1Img.src="dice2.jpg"
}
function e() {
  let p = Math.ceil(Math.random() * 6);
  if (p == 1) {
    player2Img.src = "dice1.jpg";
  } else if (p == 2) {
    player2Img.src = "dice2.jpg";
  } else if (p == 3) {
    player2Img.src = "dice3.jpg";
  } else if (p == 4) {
    player2Img.src = "dice4.jpg";
  } else if (p == 5) {
    player2Img.src = "dice5.jpg";
  } else if (p == 6) {
    player2Img.src = "dice6.jpg";
  } else {
  }
  setTimeout(null,500);
  if (p + scoreValue2 <= 50) {
  } else {
    roll2.disabled = true;
    roll1.disabled = false;
    return 2;
  }
  scoreValue2 = scoreValue2 + p;

  p2Score.innerHTML = scoreValue2;
  if (scoreValue2 == 50) {
   setTimeout(null, 500);
   winGame();
    reset();
  }
  if (p == 6) {
    roll2.disabled = true;
    roll1.disabled = false;
    return 2;
  }
}

// function k()
// {

//   if(name2!=='')
//   {
//     console.log("yes");
//   }
//   else{
//     console.log("no");
//   }
// }
name1.addEventListener("input", set);
name2.addEventListener("input", set);
function reset() {
  console.log("hi");
  player1.innerHTML = "Player 1";
  player2.innerHTML = "player 2";
  player1samp.innerHTML = "player1";
  player2samp.innerHTML = "player2";
  p1Score.innerHTML = "0";
  p2Score.innerHTML = "0";
  restrat.disabled = true;
}
