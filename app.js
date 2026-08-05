/* -------------------------------- Variables ------------------------------- */

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const incidentQuestion = document.querySelector("#incident-question");
const answerButtons = document.querySelectorAll(".answer-btn");
const feedback = document.querySelector("#feedback-message");
const nextButton = document.querySelector("#next-btn");
const scoreDisplay = document.querySelector("#score-display");
const timerDisplay = document.querySelector("#timer-display");
const incidentNumber = document.querySelector("#incident-number");

const easyButton = document.querySelector("#easy-btn");
const mediumButton = document.querySelector("#medium-btn");
const hardButton = document.querySelector("#hard-btn");

const finalMessage = document.querySelector("#final-message");
const finalScore = document.querySelector("#final-score");
const  restartButton = document.querySelector("#restart-btn");

let selectedDifficulty;
let currentIncidentIndex = 0;
let currentIncidents;
let score = 0;
let timeLimit;
let winSound;
let loseSound;
let timerSound;

const timer = new easytimer.Timer();



/* ----------------------------- Event Listeners ----------------------------- */

easyButton.addEventListener("click", startGame);
mediumButton.addEventListener("click", startGame);
hardButton.addEventListener("click", startGame);

nextButton.addEventListener("click", nextIncident);
restartButton.addEventListener("click", restartGame);

timer.addEventListener("secondsUpdated", function () {
  const seconds = timer.getTimeValues().seconds;

  timerDisplay.textContent = `Time: ${seconds}`;

  if (seconds > 0 && timerSound) {
    timerSound.stop();
    timerSound.play();
  }
});

timer.addEventListener("targetAchieved", function () {
  timerSound.stop();
  feedback.textContent = "Time's Up! Threat Escalated";

  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
});

/* -------------------------------- Functions -------------------------------- */
function unlockAudio() {
  timerSound = new Howl({
  src: ["sounds/timer.wav"],
  volume: 0.5,
  preload: true
});
  if (!winSound) {
    winSound = new Howl({
      src: ["sounds/win.wav"],
      volume: 1,
      preload: true
    });

    loseSound = new Howl({
      src: ["sounds/lose.wav"],
      volume: 1,
      preload: true
    });
  }

  if (Howler.ctx && Howler.ctx.state === "suspended") {
    Howler.ctx.resume();
  }
}
function displayIncident(incident) {
  incidentQuestion.textContent = incident.question;

  incidentNumber.textContent =
    `Security Incident ${currentIncidentIndex + 1} of ${currentIncidents.length}`;

  feedback.textContent = "";
  nextButton.classList.add("hidden");

  answerButtons.forEach((button, index) => {
    button.textContent = incident.choices[index];
    button.disabled = false;

    button.onclick = function () {
      checkAnswer(index, incident.correctChoice);
    };
  });

  startTimer();
}

function checkAnswer(selectedAnswer, correctAnswer) {
  timer.stop();
  timerSound.stop();

  if (selectedAnswer === correctAnswer) {
    feedback.textContent = "Incident Resolved!";
    score++;
  } else {
    feedback.textContent = "Security Breach!";
  }

  scoreDisplay.textContent = `Score: ${score}`;

  answerButtons.forEach((button) => {
    button.disabled = true;
  });

  nextButton.classList.remove("hidden");
}

function nextIncident() {
  currentIncidentIndex++;

  if (currentIncidentIndex < currentIncidents.length) {
    displayIncident(currentIncidents[currentIncidentIndex]);
  } else {
    showEndScreen();
  }
}

function showEndScreen() {
  timer.stop();
  if (timerSound) {
  timerSound.stop();
}

  finalScore.textContent =
    `Final Score: ${score} out of ${currentIncidents.length}`;

  if (score >= Math.ceil(currentIncidents.length * 0.7)) {
    finalMessage.textContent =
      "Mission Successful! Company Secured";
       winSound.stop();
    winSound.play();
  } else {
    finalMessage.textContent =
      "Mission Failed! Company Compromised";
      loseSound.stop();
      loseSound.play();
  }

  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
}

function shuffleIncidents() {
  currentIncidents.sort(function () {
    return Math.random() - 0.5;
  });
}

function startTimer() {
  timer.stop();

  timerDisplay.textContent = `Time: ${timeLimit}`;

  timer.start({
    countdown: true,
    startValues: {
      seconds: timeLimit
    }
  });
}

function startGame(event) {
 unlockAudio();
  score = 0;
  currentIncidentIndex = 0;
  selectedDifficulty = event.target.id;

  scoreDisplay.textContent = "Score: 0";
  feedback.textContent = "";
  nextButton.classList.add("hidden");

  if (selectedDifficulty === "easy-btn") {
    currentIncidents = [...easyIncidents];
    timeLimit = 20;
  }

  if (selectedDifficulty === "medium-btn") {
    currentIncidents = [...mediumIncidents];
    timeLimit = 15;
  }

  if (selectedDifficulty === "hard-btn") {
    currentIncidents = [...hardIncidents];
    timeLimit = 10;
  }

  shuffleIncidents();

  currentIncidents = currentIncidents.slice(
    0,
    Math.min(20, currentIncidents.length)
  );

  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  displayIncident(currentIncidents[currentIncidentIndex]);
}

function restartGame() {
  timer.stop();
  if (timerSound) {
  timerSound.stop();
}

  score = 0;
  currentIncidentIndex = 0;
  currentIncidents = undefined;
  selectedDifficulty = undefined;

  scoreDisplay.textContent = "Score: 0";
  timerDisplay.textContent = "Time: 0";
  feedback.textContent = "";

  nextButton.classList.add("hidden");

  answerButtons.forEach((button) => {
    button.disabled = false;
  });

  endScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
}