const pos = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('backboard');
const winningPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let currentPlayer = 'X';
let = playerTurn = true;


function showGame(){
    document.getElementById('game-board').style.display = 'block';
}

function gameMode(){
    let gameActive = true;
    let vsPlayerMode = document.getElementById('gMode2');
    let vsCpuMode = document.getElementById('gMode1');
    vsPlayerMode.addEventListener('click', function(){
        if(gameActive){
        vsPlayerMode.classList.toggle('active');
        vsCpuMode.classList.remove('active');
        vsPlayer();
        }
    });
    vsCpuMode.addEventListener('click', function(){
        gameActive = false;
        if(!gameActive){
        vsCpuMode.classList.add('active');
        vsPlayerMode.classList.remove('active');
        vsCpu();
    }
    });
}

function vsPlayer(){
    for(let i = 0; i < pos.length; i++){
        if(playerTurn === true){
        pos[i].addEventListener('click', function(){
            pos[i].classList.remove('o');
            pos[i].classList.add('x');
            playerTurn = false;
        });
    }else if(playerTurn === false) {
        pos[i].addEventListener('click', function(){
            pos[i].classList.remove('x');
            pos[i].classList.add('o');
    });
    }
}
}

function vsCpu() {
    for(let i = 0; i < pos.length; i++){
        if(playerTurn){
        pos[i].addEventListener('click', function(){
            pos[i].classList.remove('x');
            pos[i].classList.add('o');
        });
    }
}
}
