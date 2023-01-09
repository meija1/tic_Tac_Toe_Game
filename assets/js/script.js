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

function showGame() {
    document.getElementById('game-board').style.display = 'block';
}

function mouseOver() {
    pos.forEach(cell => {
    cell.addEventListener('mouseenter', () => cell.classList.add('active'));
    cell.addEventListener('mouseleave', () => cell.classList.remove('active'));
})
}



runGame()

function runGame() {
    pos.forEach(cell => {
        cell.addEventListener('click', function () {
            cell.style.pointerEvents = 'none';
            let isCell = cell.getAttribute('data-cell');
            currentPlayer === true ? xPlayer.push(isCell) : oPlayer.push(isCell);
            if(currentPlayer === true){
                mouseOver()
                cell.classList.add('x');
            } else {
                cell.classList.add('o');
            }
            currentPlayer = !currentPlayer;
            checkWinner();
        })

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
        cell.style.pointerEvents = 'auto';
    })
}