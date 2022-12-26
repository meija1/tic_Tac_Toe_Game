const pos = document.querySelectorAll('[data-cell]');
runGame();
const winningPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function showGame(){
    document.getElementById('game-board').style.display = 'block';
}

function runGame(){
    for(let i = 0; i < pos.length; i++){
        pos[i].addEventListener('click', function(){
            pos[i].classList.toggle('x');
        });
    }
}

