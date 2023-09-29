
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
    let playerName = name;
    let playerMarker = marker;

    getName = () => playerName;
    getMarker = () => playerMarker;

    return {
        getName,
        getMarker
    };
};




//const playerOne = createPlayers('Bradley', 'X');
//const playerTwo = createPlayers('Tessa', 'O')






playerSubmitBtn.addEventListener('click', () => {
    const playerOneName = playerOneInput.value;
    const playerTwoName = playerTwoInput.value;

    const playerOne = createPlayers(playerOneName, 'X');
    const playerTwo = createPlayers(playerTwoName, 'O');
  
    playerOneDisplay.innerHTML = `${playerOne.getName()} is ${playerOne.getMarker()}`
    playerTwoDisplay.innerHTML = `${playerTwo.getName()} is ${playerTwo.getMarker()}`
    

});



const togglePlayer = (currentPlayer) => {
    return currentPlayer === 'X' ? 'O' : 'X';
}

let  currentPlayer = 'X';




cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(currentPlayer === 'X'){
            cell.classList.add('currentPlayer')
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        console.log('hel')
    })
})









//cells.forEach(cell => {
//    cell.addEventListener('click', () => {
//        if(playerOne.marker === 'X'){
//            cell.classList.add('x');
//
//        }else {
//            cell.classList.add('circle');
//        }
//    })
//})
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