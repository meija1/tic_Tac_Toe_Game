let pos = Array.from(document.querySelectorAll('data-cell'));
const vsPlayerMode = document.getElementById('gMode2');
const vsCpuMode = document.getElementById('gMode1');
let currentPlayer = true;
let xPlayer = [];
let oPlayer = [];
let winPositions = [['0','1','2'],['3','4','5'],['6','7','8'],['0','3','6'],['1','4','7'],['2','5','8'],['0','4','8']['2','4','6']];

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

          if(xPlayer.length >= 3) {
            checkWinner()
         }
        }
});

}


function vsCpu() {

}

function checkWinner() {
    winPositions.forEach(winPos => {
        let xWon = winPos.every(win => xPlayer.includes(win));
        let oWon = winPos.every(win => oPlayer.includes(win));
        if(xWon || oWon){
            document.getElementById('startAgain').style.display = 'block';
            document.getElementById('text').textContent = xWon ? "X Won" : "O Won";
        } else if(xPlayer.length >= 5) {
            document.getElementById('startAgain').style.display = 'block';
            document.getElementById('text').textContent = "It's a Draw!"
        }
    })
}