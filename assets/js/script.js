let pos = Array.from(document.querySelectorAll('data-cell'));


const vsPlayerMode = document.getElementById('gMode2');
const vsCpuMode = document.getElementById('gMode1');
let currentPlayer = true;
let xPlayer = [];
let oPlayer = [];

function showGame() {
    document.getElementById('game-board').style.display = 'block';
}

vsPlayerMode.addEventListener('click', vsPlayer);
vsCpuMode.addEventListener('click', vsCpu);

function vsPlayer() {
    document.addEventListener('click', event => {
    pos = event.target;
    let posTrue = pos.hasAttribute('data-cell');
    
        if (posTrue) {
            pos.style.pointerEvents = "none";
            let cell = pos.dataset.index;
            currentPlayer === true ? xPlayer.push(cell) : oPlayer.push(cell);
            pos.classList.add(currentPlayer ? 'x' : 'o');
            currentPlayer = !currentPlayer;
          if(xPlayer.length >= 5) {
            document.getElementById('restart').style.display = 'block';
         }
        }
});

}


function vsCpu() {

}

function checkWinner() {

}