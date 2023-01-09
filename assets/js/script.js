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
let turnsText = document.getElementById('turnText');

/* Show the main game after button play button has been clicked */
function showGame() {
    document.getElementById('game-board').style.display = 'block';
}

/* Create gray scale animation for each cell of the game */
pos.forEach(cell => {
    cell.addEventListener('mouseenter', () => cell.classList.add('active'));
    cell.addEventListener('mouseleave', () => cell.classList.remove('active'));
})

runGame();

/* Initiate the main game */
function runGame() {
    /* Go trough each cell and add an event listener,
     see which cell has been clicked on */
    pos.forEach(cell => {
        cell.addEventListener('click', function () {
            cell.style.pointerEvents = 'none';
            let isCell = cell.getAttribute('data-cell');
            /* Add classes to player array and push cells with index to the node list */
            if (currentPlayer === true) {
                cell.classList.add('x');
                xPlayer.push(isCell)
                turnsText.innerText = "O's";
            } else {
                cell.classList.add('o');
                oPlayer.push(isCell);
                turnsText.innerText = "X's";
            }
            /* Switch players */
            currentPlayer = !currentPlayer;
            checkWinner();
        })

    })

}

/* Check each winning position with players arrays to see winning combinations */
function checkWinner() {
    winPositions.forEach(winPos => {
        const xWon = winPos.every(pos => xPlayer.includes(pos))
        const oWon = winPos.every(pos => oPlayer.includes(pos))
        /* Display which player has won and update score */
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

        } else if (!xWon && xPlayer.length + oPlayer.length === 9) {
            document.getElementById('startAgain').style.display = 'block';
            document.getElementById('text').textContent = "It's a Draw!";
            restartGame()
        }
    })
}

/* Restart game and hide start again screen */
function restartGame() {
    document.getElementById('restart').addEventListener('click', () => {
        document.getElementById('startAgain').style.display = 'none';
    })
    /* Clear player arrays and each cell, update current players position */
    currentPlayer = true;
    xPlayer = [];
    oPlayer = [];
    pos.forEach(cell => {
        cell.classList.remove('x', 'o');
        cell.style.pointerEvents = 'auto';
    })
}