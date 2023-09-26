
const cells = document.querySelectorAll('.cells');
const winnerModal = document.querySelector('.winner-modal');
const winnerNameDisplay = document.querySelector('.winner-name-display');
const resetBtn = document.getElementById('reset-btn');
const backdrop = document.querySelector('.backdrop');


const player = (name, marker) => {
    const sayName = () => console.log(`${name}`);
    const sayMarker = () => console.log(`${marker}`)
    return { name, marker, sayName, sayMarker};
};

const playerOne = player('Bradley', 'X');
const playerTwo = player('Tessa', 'O');

console.log(playerOne.sayName());
console.log(playerOne.sayMarker());
console.log(playerTwo.sayName());
console.log(playerTwo.sayMarker());



cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if(playerOne.marker === 'X'){
            cell.classList.add('x');

        }else if(playerTwo.marker === 'O'){
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