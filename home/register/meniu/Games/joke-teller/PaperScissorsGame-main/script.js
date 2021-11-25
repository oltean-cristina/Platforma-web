import {startConfetti, stopConfetti, removeConfetti} from './confetti.js'

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl = document.getElementById('computerChoice');
const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const resultText = document.getElementById('resultText');
const allGameIcon = document.querySelectorAll('.far');

let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

const hitSound = new Audio('sounds/swish.m4a');
const lossSound = new Audio('sounds/aww.mp3');
const winSound = new Audio('sounds/cash.mp3');

const choices = {
        rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
        paper: { name: 'Paper', defeats: ['rock', 'spock'] },
        scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
        lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
        spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
    };

//Reset all 'selected' icons
function resetSelected(){
  allGameIcon.forEach(( icon ) => {
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}

// Reset Score & playerChoice/computerChoice
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;

  playerChoiceEl.textContent = "";
  computerChoiceEl.textContent = "";

  resultText.textContent = '';
  resetSelected();
}
window.resetAll = resetAll;

// Check result, increase score and update resultText
function updateScore(playerChoice){
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a tie."
  } else {
    const choice = choices[playerChoice];
    if(choice.defeats.indexOf(computerChoice) > -1){
      resultText.textContent = "You won.";
      startConfetti();
      winSound.play();
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = "You lost.";
      lossSound.play();
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

function computerRandomChoice(){
    const computerChoiceNumber = Math.random();
       if(computerChoiceNumber < 0.2){
         computerChoice = 'rock';
       } else if (computerChoiceNumber <= 0.4){
         computerChoice = 'paper';
       } else if(computerChoiceNumber <= 0.6){
         computerChoice = 'scissors';
       } else if(computerChoiceNumber <= 0.8){
         computerChoice = 'lizard'
       } else {
         computerChoice = 'spock'
       }
}
// Add 'selected' styling & computerChoice
function displayChomputerChoice() {
  switch(computerChoice){
    case 'rock' : {
      computerRock.classList.add('selected');
      computerChoiceEl.textContent = " --- rock";
      break;
    }
    case 'paper' : {
      computerPaper.classList.add('selected');
      computerChoiceEl.textContent = ' --- paper';
      break;
    }
    case 'scissors' : {
      computerScissors.classList.add('selected');
      computerChoiceEl.textContent = ' --- scissors';
      break;
    }
    case 'lizard': {
      computerLizard.classList.add('selected');
      computerChoiceEl.textContent = ' --- lizard';
      break;
    }
    case 'spock':{
      computerSpock.classList.add('selected');
      computerChoiceEl.textContent = ' --- spock';
      break;
      }
    default: 
      break;
  }
}

function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayChomputerChoice();
  updateScore(playerChoice);
}

// Passing player selection value and style icons
function select(playerChoice) {
    checkResult(playerChoice)
  // Add 'selected' styling and update playerChoice
  switch(playerChoice){
    case 'rock' : {
      playerRock.classList.add('selected');
      playerChoiceEl.textContent = " --- rock";
      hitSound.play();
      break;
    }
    case 'paper' : {
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' --- paper';
      hitSound.play();
      break;
    }
    case 'scissors' : {
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' --- scissors';
      hitSound.play();
      break;
    }
    case 'lizard': {
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- lizard';
      hitSound.play();
      break;
    }
    case 'spock':{
      playerSpock.classList.add('selected');
      playerChoiceEl.textContent = ' --- spock';
      hitSound.play();
      break;
      }
    default: 
      break;
  }
}
window.select = select; 
// On start up, set initial value
resetAll();





