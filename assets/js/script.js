let pos = document.querySelectorAll('data-cell');
const winningPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const vsPlayerMode = document.getElementById('gMode2');
const vsCpuMode = document.getElementById('gMode1');
let currentPlayer = true;
let xPlayer = [];
let oPlayer = [];

function showGame(){
    document.getElementById('game-board').style.display = 'block';
}

vsPlayerMode.addEventListener('click', vsPlayer);
vsCpuMode.addEventListener('click', vsCpu);

function vsPlayer(){
    pos = document.addEventListener('click', event => {
        pos = event.target;
        let posTrue = pos.hasAttribute('data-cell');
        if(posTrue){
            let cell = pos.dataset.value;
            currentPlayer === true ? xPlayer.push(cell) : oPlayer.push(cell);
        pos.classList.add(currentPlayer ? 'x' : 'o');
        currentPlayer = !currentPlayer;
        }
    });  

}  


function vsCpu() {
    
}
