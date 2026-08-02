/*Variables*/
const startScreen=document.getElementById("start-screen");
const gameScreen=document.getElementById("game-screen");
const endScreen=document.getElementById("end-screen");
const incidentQuestion=document.querySelector( '#incident-question');
let selectedDifficulty;
let currentIncidentIndex=0;
let currentIncidents;

const easyButton=document.querySelector('#easy-btn');
const mediumButton=document.querySelector('#medium-btn');
const hardButton=document.querySelector('#hard-btn');
const incidentChoices=document.querySelector('#answer-container');
const answerButtons=document.querySelectorAll('.answer-btn');
const feedback=document.querySelector('#feedback-message');
const nextButton=document.querySelector('#next-btn');

/*Event Listeners*/
easyButton.addEventListener('click',startGame); 
mediumButton.addEventListener('click',startGame); 
hardButton.addEventListener('click',startGame);

/*functions*/
function displayIncident(incident) {
  incidentQuestion.textContent = incident.question;

  answerButtons.forEach((button, index) => {
    button.textContent = incident.choices[index];
    button.onclick = () => checkAnswer(index, incident.correctChoice);
  });
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    feedback.textContent = "Incident Resolved!";
  } else {
    feedback.textContent = "Security Breach!";
  }
}

function startGame(event) {
  selectedDifficulty = event.target.id;

  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  if (selectedDifficulty === "easy-btn") {
    currentIncidents = easyIncidents;
  }

  if (selectedDifficulty === "medium-btn") {
    currentIncidents = mediumIncidents;
  }

  if (selectedDifficulty === "hard-btn") {
    currentIncidents = hardIncidents;
  }

  displayIncident(currentIncidents[currentIncidentIndex]);
}