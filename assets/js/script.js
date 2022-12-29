const pos = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('backboard');
const winningPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let currentPlayer = 'X';


function showGame(){
    document.getElementById('game-board').style.display = 'block';
}

function gameMode(){
    let vsPlayerMode = document.getElementById('gMode1');
    let vsCpuMode = document.getElementById('gMode2');
    vsPlayerMode.addEventListener('click', function(){
        vsPlayerMode.classList.add('active');
        vsPlayer();
    })
    vsCpuMode.addEventListener('click', function(){
        vsCpuMode.classList.add('active');
        vsPlayerMode.classList.remove('active');
        vsCpu()
    })
}

function vsPlayer(){
    for(let i = 0; i < pos.length; i++){
        if(currentPlayerTurn){
        pos[i].addEventListener('click', function(){
            pos[i].classList.toggle('x');
        });
    }else {
        pos[i].classList.toggle('o');
    }
    }
}

function vsCpu() {
    for(let i = 0; i < pos.length; i++){
        if(currentPlayerTurn){
        pos[i].addEventListener('click', function(){
            pos[i].classList.toggle('o');
        });
    }
}
}

function currentPlayerTurn() {
    currentPlayer = currentPlayer =='X' ? currentPlayer = 'O' : currentPlayer = 'X';
}


    

