const pos = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('backboard');
const winningPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const currentPlayer = 'X';
gameMode()


function showGame(){
    document.getElementById('game-board').style.display = 'block';
}

function gameMode(){
    let gameMode1 = document.getElementById('gMode1');
    let gameMode2 = document.getElementById('gMode2');
    if(gameMode1){
        return vsCpu();
    }else if(gameMode2) {
        return vsPlayer();
    }
}

function vsPlayer(){
    for(let i = 0; i < pos.length; i++){
        if(currentPlayerTurn){
        pos[i].addEventListener('click', function(){
            pos[i].classList.toggle('x');
            currentPlayer = 'O';
        });
    }else {
        pos[i].classList.toggle('o');
    }
    }
}

function vsCpu() {
    
}


    

