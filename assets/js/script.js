let pos = document.querySelectorAll('[data-cell]');
let winPositions = [
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['0', '3', '6'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['0', '4', '8'],
    ['2', '4', '6']
];
let currentPlayer = true;
let xPlayer = [];
let oPlayer = [];

document.getElementById('button').addEventListener('click', function () {
    document.getElementById('game-board').style.display = 'block';
    let buttons = document.getElementsByTagName('a');
    for (let button of buttons) {
        button.addEventListener('click', function () {
            let gameMode = this.getAttribute('data-mode');
            currentPlayer = true;
            xPlayer = [];
            oPlayer = [];
            pos.forEach(cell => {
                cell.classList.remove('x', 'o');
            })
            runGame(gameMode);
        })
    }
})

function runGame(gameMode) {
    if (gameMode === 'vsPlayer') {
        vsPlayer();
    } else if (gameMode === 'vsCPU') {
        vsCpu();
    }
}

function vsPlayer() {
    pos.forEach(cell => {
        cell.addEventListener('click', function (event) {
            let currentCell = event.target;
            let position = currentCell.dataset.cell;
            currentPlayer === true ? xPlayer.push(position) : oPlayer.push(position);
            currentCell.classList.add(currentPlayer ? 'x' : 'o');
            currentPlayer = !currentPlayer;
            if (xPlayer.length >= 3) {
                checkWinner();
            }
        })
    })
}


function vsCpu() {
    let cpu = Math.floor(Math.random() * pos.length);
    pos.forEach(cell =>{
        if(currentPlayer){
            cell.addEventListener('click', function (event){
                let currentCell = event.target;
                let position = currentCell.dataset.cell;
                xPlayer.push(position);
                currentCell.classList.add('x');
            })
            
        }else {
            cell = pos[cpu].classList.add('o');
        }
        currentPlayer =!currentPlayer;
    })
}

function checkWinner() {
    winPositions.forEach(winPos => {
        const xWon = winPos.every(pos => xPlayer.includes(pos))
        const oWon = winPos.every(pos => oPlayer.includes(pos))

        if (xWon) {
            let xScore = parseInt(document.getElementById('xScore').innerText);

            document.getElementById('startAgain').style.display = 'block';
            document.getElementById('text').textContent = "X Won!";

            document.getElementById('xScore').innerText = xScore + 1;
            restartGame();
        }
        if (oWon) {
            let oScore = parseInt(document.getElementById('oScore').innerText);

            document.getElementById('startAgain').style.display = 'block';
            document.getElementById('text').textContent = "O Won!";

            document.getElementById('oScore').innerText = oScore + 1;
            restartGame();
        } else if (xPlayer.length >= 5) {
            document.getElementById('startAgain').style.display = 'block';
            document.getElementById('text').textContent = "It's a Draw!";
            restartGame()
        }
    })
}

function restartGame() {
    document.getElementById('restart').addEventListener('click', () => {
        document.getElementById('startAgain').style.display = 'none';
    })
    currentPlayer = true;
    xPlayer = [];
    oPlayer = [];
    pos.forEach(cell => {
        cell.classList.remove('x', 'o');
    })
}