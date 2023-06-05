let activePlayer = 'X';

let winIndex = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9']
]
let board = document.getElementById('board');
let cell = document.getElementsByClassName('cell');

for (let i = 1; i <= 9; i++) {
    board.innerHTML += `<div class="cell" pos=${i}></div>`;
}

for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', function(){
        let arr = [];

        if (this.innerHTML === '') {
            this.innerHTML = activePlayer;
        } else {
            alert('Ячейка занята');
            return;
        }
    
        for (let i in cell) {
            if (cell[i].innerHTML == activePlayer) {
                arr.push(cell[i].getAttribute('pos'))
            }
        }
    
        console.log(arr);
        if (checkWin(arr)) {
            alert(`🍾 Победил игрок ${activePlayer}! 🍾`);
            reset();
            return;
        }
        activePlayer = activePlayer == 'X' ? 'O' : 'X'; 
    });
}

function checkWin(arr) {
    for (let i in winIndex) {
        let win = true;
        for (let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = arr.indexOf(id);
            if (ind == -1) {
                win = false
            }
        }
        if (win) return true;
    }
}

function reset() {
    for (let i = 0; i < 9; i++) {
        cell[i].innerHTML = '';
    }
    activePlayer = 'X';
}



