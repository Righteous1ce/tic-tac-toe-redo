
const cells = document.querySelectorAll('.cells');
const winnerModal = document.querySelector('.winner-modal');
const winnerNameDisplay = document.querySelector('.winner-name-display');
const resetBtn = document.getElementById('reset-btn');
const backdrop = document.querySelector('.backdrop');
const playerOneDisplay = document.querySelector('.player-one');
const playerTwoDisplay = document.querySelector('.player-two');


const craetePlayers = (name, marker,) => {
    const sayName = () => 
    playerOneDisplay.innerHTML = `${name} is ${marker}`
    playerTwoDisplay.innerHTML = `${name} is ${marker}`;
    
    return {name, marker, sayName};
};

const playGame = (name, marker, )

const playerOne = craetePlayers('Bradley', 'X');
const playerTwo = craetePlayers('Tessa', 'O');
playerOne.sayName();





cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(playerOne.marker === 'X'){
            cell.classList.add('x');

        }else {
            cell.classList.add('circle');
        }
    })
})

if(playerOne.name === 'Bradley'){
    winnerModal.classList.add('active');
    backdrop.classList.add('active');
    winnerNameDisplay.innerHTML = `${playerTwo.name}, is the Winner!`
}

resetBtn.addEventListener('click', () => {
    winnerModal.classList.remove('active');
    backdrop.classList.remove('active');
})