
const cells = document.querySelectorAll('.cells');
const winnerModal = document.querySelector('.winner-modal');
const winnerNameDisplay = document.querySelector('.winner-name-display');
const resetBtn = document.getElementById('reset-btn');
const backdrop = document.querySelector('.backdrop');
const playerOneDisplay = document.querySelector('.player-one');
const playerTwoDisplay = document.querySelector('.player-two');
const playerOneInput = document.getElementById('player-one-input');
const playerTwoInput = document.getElementById('player-two-input');
const playerSubmitBtn = document.getElementById('submit-btn');




const createPlayers = (name, marker) => {
    const playerName = name;
    const playerMarker = marker;

    getName = () => playerName;
    getMarker = () => playerMarker;

    return {
        getName,
        getMarker,
    };
};




//const playerOne = createPlayers('Bradley', 'X');
//const playerTwo = createPlayers('Tessa', 'O');


let playerOne = '';
let playerTwo = '';

let currentPlayer = 'X';

playerSubmitBtn.addEventListener('click', () => {
    const playerOneName = playerOneInput.value;
    const playerTwoName = playerTwoInput.value;

    playerOne = createPlayers(playerOneName, 'X');
    playerTwo = createPlayers(playerTwoName, 'O');
  
    playerOneDisplay.innerHTML = `${playerOne.getName()} is ${playerOne.getMarker()}`
    playerTwoDisplay.innerHTML = `${playerTwo.getName()} is ${playerTwo.getMarker()}`
    

});


const togglePlayer = () => {

    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
    
};

//console.log('current player ' + currentPlayer)
//togglePlayer();
//console.log('current player ' + currentPlayer)
//togglePlayer();
//console.log('current player ' + currentPlayer)


cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(currentPlayer === 'X'){
            cell.classList.add('x');
            togglePlayer();
            
        }else {
            cell.classList.add('circle');
            togglePlayer();
            
        }
    });
});


/*
if(playerOne.name === 'Bradley'){
    winnerModal.classList.add('active');
    backdrop.classList.add('active');
    winnerNameDisplay.innerHTML = `${playerOne.name}, is the Winner!`
}

resetBtn.addEventListener('click', () => {
    winnerModal.classList.remove('active');
    backdrop.classList.remove('active');
})
*/