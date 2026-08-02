/*Variables*/
const startScreen=document.getElementById("start-screen");
const gameScreen=document.getElementById("game-screen");
const endScreen=document.getElementById("end-screen");
const IncidentQuestion=document.querySelector( '#incident-question');
let selectedDifficulty;

const easyButton=document.querySelector('#easy-btn');
const mediumButton=document.querySelector('#medium-btn');
const hardButton=document.querySelector('#hard-btn');

/*Event Listeners*/
easyButton.addEventListener('click',startGame); 
mediumButton.addEventListener('click',startGame); 
hardButton.addEventLlistener('click',startGame);

/*functions*/
function startGame(event){
selectedDifficulty=event.target.id;
startScreen.classList.add('hidden');
gameScreen.classList.remove('hidden');
}

