let pos = document.querySelectorAll('[data-cell]');
const gameBoard = document.getElementById('backboard');
const winningPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let currentPlayer = true;
let xPlayer = [];
let oPlayer = [];


function showGame(){
    document.getElementById('game-board').style.display = 'block';
}

function gameMode(){
    const vsPlayerMode = document.getElementById('gMode2');
    const vsCpuMode = document.getElementById('gMode1');
    vsPlayerMode.addEventListener('click', function(){
        vsPlayerMode.classList.toggle('active');
        vsCpuMode.classList.remove('active');
        vsPlayer();
    });
    vsCpuMode.addEventListener('click', function(){
        vsCpuMode.classList.add('active');
        vsPlayerMode.classList.remove('active');
        vsCpu();
    
    });
}

function vsPlayer(){
    pos = document.addEventListener('click', event => {
        pos = event.target;
        pos.classList.add(currentPlayer ? 'x' : 'o');
        currentPlayer = !currentPlayer;
        
    });    
}

function vsCpu() {
    for(let i = 0; i < pos.length; i++){
        if(currentPlayer){
        pos[i].addEventListener('click', function(){
            pos[i].classList.remove('x');
            pos[i].classList.add('o');
        });
    }
}
}
