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



let playerOne = '';
let playerTwo = '';
let currentPlayer = 'X'; 

playerSubmitBtn.addEventListener('click', () => {
    
    const playerOneName = playerOneInput.value;
    const playerTwoName = playerTwoInput.value;

    if(playerOneName === '' ){
        playerOne = createPlayers('Player One', 'X');
        playerOneDisplay.innerHTML = `${playerOne.getName()} is ${playerOne.getMarker()}`
    } else {
        playerOne = createPlayers(playerOneName, 'X');

    }
    
    
    if(playerTwoName === ''){
        playerTwo = createPlayers('Player Two', 'O');
        playerTwoDisplay.innerHTML = `${playerTwo.getName()} is ${playerTwo.getMarker()}`
    }else {

        playerTwo = createPlayers(playerTwoName, 'O');
    }


  
    playerOneDisplay.innerHTML = `${playerOne.getName()} is ${playerOne.getMarker()}`
    playerTwoDisplay.innerHTML = `${playerTwo.getName()} is ${playerTwo.getMarker()}`
});


const togglePlayer = () => {
    currentPlayer = currentPlayer === 'X' ? 'O': 'X';
};


function checkForWinner() {
    const winningCells = document.querySelectorAll('.cells');

    winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for(let combinations of winningCombinations){
        const [a, b, c] = combinations
        if(
            winningCells[a].classList.contains('x')&&
            winningCells[b].classList.contains('x') &&
            winningCells[c].classList.contains('x')
        ){
            return playerOne.getName();
        } else if(
            winningCells[a].classList.contains('circle')&&
            winningCells[b].classList.contains('circle')&&
            winningCells[c].classList.contains('circle')
        ){
            return playerTwo.getName();
        }
    }
    return false
}



cells.forEach(cell => {
    cell.addEventListener('click', () => {

        if(!cell.classList.contains('x') && !cell.classList.contains('circle')){
            if(currentPlayer === 'X'){
                cell.classList.add('x'); 
            }else {
                cell.classList.add('circle');
            }
            togglePlayer();

        }
            
       
        
        const winner = checkForWinner();
        if (winner) {
            winnerModal.classList.add('active');
            backdrop.classList.add('active');
            winnerNameDisplay.innerHTML = `${winner}, is the Winner!`
            
        } else{
            console.log('no winner yet');
        }


    });
});


const clearBoard = () =>{
    resetCells = document.querySelectorAll('.cells');

    cells.forEach(cell => {
        cell.classList.remove('x', 'circle');
    })
}



resetBtn.addEventListener('click', () => {
    winnerModal.classList.remove('active');
    backdrop.classList.remove('active');
    playerOneInput.value = '';
    playerTwoInput.value = '';
    playerOneDisplay.innerHTML = '';
    playerTwoDisplay.innerHTML = '';
    clearBoard();
    currentPlayer ='X'
    
});

