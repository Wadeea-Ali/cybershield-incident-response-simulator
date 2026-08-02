/*Variables*/
const startScreen=document.getElementById("start-screen");
const gameScreen=document.getElementById("game-screen");
const endScreen=document.getElementById("end-screen");
const incidentQuestion=document.querySelector( '#incident-question');
let selectedDifficulty;
let currentIncidentIndex=0;
let currentIncidents;
let score=0;
const timer = new easytimer.Timer();
let timeLimit;

const easyButton=document.querySelector('#easy-btn');
const mediumButton=document.querySelector('#medium-btn');
const hardButton=document.querySelector('#hard-btn');
const incidentChoices=document.querySelector('#answer-container');
const answerButtons=document.querySelectorAll('.answer-btn');
const feedback=document.querySelector('#feedback-message');
const nextButton=document.querySelector('#next-btn');
const scoreDisplay=document.querySelector('#score-display');
const timerDisplay = document.querySelector("#timer-display");

/*Event Listeners*/
easyButton.addEventListener('click',startGame); 
mediumButton.addEventListener('click',startGame); 
hardButton.addEventListener('click',startGame);
nextButton.addEventListener('click',nextIncident);
timer.addEventListener("secondsUpdated", function () {
  timerDisplay.textContent = `Time: ${timer.getTimeValues().seconds}`;
});
timer.addEventListener("targetAchieved", function () {
  feedback.textContent = "Time's Up! Threat Escalated";

  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
});
/*functions*/
function displayIncident(incident) {
  incidentQuestion.textContent = incident.question;

  answerButtons.forEach((button, index) => {
    button.textContent = incident.choices[index];
    button.onclick = () => checkAnswer(index, incident.correctChoice);
    button.disabled = false;
    startTimer();
  });

}

function checkAnswer(selectedAnswer, correctAnswer) {
    timer.stop();
  if (selectedAnswer === correctAnswer) {
    feedback.textContent = "Incident Resolved!";
    score++;

  } else {
    feedback.textContent = "Security Breach!";
  }
  nextButton.classList.remove("hidden");
  scoreDisplay.textContent = `Score: ${score}`;
  answerButtons.forEach(button => button.disabled = true);
}
function nextIncident() {
  currentIncidentIndex++;

  if (currentIncidentIndex < currentIncidents.length) {
    displayIncident(currentIncidents[currentIncidentIndex]);
    feedback.textContent = "";
    nextButton.classList.add("hidden");
  } else {
    endScreen.classList.remove("hidden");
    gameScreen.classList.add("hidden");
  }
}
function shuffleIncidents() {
    currentIncidents.sort(() => Math.random() - 0.5);
}
function startTimer() {
  timer.stop();

  timer.start({
    countdown: true,
    startValues: {
      seconds: timeLimit
    }
  });

  timerDisplay.textContent = `Time: ${timeLimit}`;
}

function startGame(event) {
    score=0;
    scoreDisplay.textContent = `Score: ${score}`;
    currentIncidentIndex = 0;
  selectedDifficulty = event.target.id;

  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  if (selectedDifficulty === "easy-btn") {
    currentIncidents = easyIncidents;
    timeLimit=20;
  }

  if (selectedDifficulty === "medium-btn") {
    currentIncidents = mediumIncidents;
    timeLimit=15;
  }

  if (selectedDifficulty === "hard-btn") {
    currentIncidents = hardIncidents;
    timeLimit=10;
  }
  shuffleIncidents();

  displayIncident(currentIncidents[currentIncidentIndex]);
}