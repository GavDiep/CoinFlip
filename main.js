// COIN FLIP SIMULATOR

// HTML VARIABLES
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// Count Variables
let numHeads = 0;
let numTails = 0;

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Gen a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate Coinflip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

// Dice Roll

// Variables
let diceOutEl = document.getElementById("diceOutput");
let diceOutEl2 = document.getElementById("diceOutput2");
let oneEl = document.getElementById("oneOut");
let twoEl = document.getElementById("twoOut");
let threeEl = document.getElementById("threeOut");
let fourEl = document.getElementById("fourOut");
let fiveEl = document.getElementById("fiveOut");
let sixEl = document.getElementById("sixOut");
let totalA = document.getElementById("sum");

// Dice roll variables counter

let numOnes = 0;
let numTwos = 0;
let numThrees = 0;
let numFours = 0;
let numFives = 0;
let numSixes = 0;

// Event Listener
document.getElementById("diceBtn").addEventListener("click", diceRoll);

function diceRoll() {
  // diceroll gen
  let diceRand = Math.floor(Math.random() * 6 + 1);
  let diceRand2 = Math.floor(Math.random() * 6 + 1);

  // Diceroll1 sim
  if (diceRand == 1) {
    diceOutEl.innerHTML = "<img src='img/1.png'/>";
    numOnes++;
    oneEl.innerHTML = numOnes;
  } else if (diceRand == 2) {
    diceOutEl.innerHTML = "<img src='img/2.png'/>";
    numTwos++;
    twoEl.innerHTML = numTwos;
  } else if (diceRand == 3) {
    diceOutEl.innerHTML = "<img src='img/3.png'/>";
    numThrees++;
    threeEl.innerHTML = numThrees;
  } else if (diceRand == 4) {
    diceOutEl.innerHTML = "<img src='img/4.png'/>";
    numFours++;
    fourEl.innerHTML = numFours;
  } else if (diceRand == 5) {
    diceOutEl.innerHTML = "<img src='img/5.png'/>";
    numFives++;
    fiveEl.innerHTML = numFives;
  } else if (diceRand == 6) {
    diceOutEl.innerHTML = "<img src='img/6.png'/>";
    numSixes++;
    sixEl.innerHTML = numSixes;
  } else {
  }

  // Dice 2

  if (diceRand2 == 1) {
    diceOutEl2.innerHTML = "<img src='img/1.png'/>";
    numOnes++;
    oneEl.innerHTML = numOnes;
  } else if (diceRand2 == 2) {
    diceOutEl2.innerHTML = "<img src='img/2.png'/>";
    numTwos++;
    twoEl.innerHTML = numTwos;
  } else if (diceRand2 == 3) {
    diceOutEl2.innerHTML = "<img src='img/3.png'/>";
    numThrees++;
    threeEl.innerHTML = numThrees;
  } else if (diceRand2 == 4) {
    diceOutEl2.innerHTML = "<img src='img/4.png'/>";
    numFours++;
    fourEl.innerHTML = numFours;
  } else if (diceRand2 == 5) {
    diceOutEl2.innerHTML = "<img src='img/5.png'/>";
    numFives++;
    fiveEl.innerHTML = numFives;
  } else {
    diceOutEl2.innerHTML = "<img src='img/6.png'/>";
    numSixes++;
    sixEl.innerHTML = numSixes;
  }

  // Sum of dice

  let total = diceRand + diceRand2;
  totalA.innerHTML = total;
  console.log(diceRand);
  console.log(diceRand2);
}
