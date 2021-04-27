//Constants
const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const audioBackground = new Audio('audio/background.mp3');
const audioX = new Audio('audio/X.wav');
const audioO = new Audio('audio/O.wav');
const audioEnd1 = new Audio('audio/Glass.mp3');
const audioEnd2 = new Audio('audio/Bomb.mp3');
const player = {
    '1': 'X',
    '-1': 'O',
    'null': '',
}

// Variables (state)
let board = [null, null, null, null, null, null, null, null, null];
let turn = 1;
let isWinner = '';
let sound = false;

// Cached Element References
const boardEl = document.querySelectorAll('.board > div');
let msgDiv = document.getElementById('message');
let audio = document.getElementById('audio');


// Event Listeners
document.querySelector('.board').addEventListener('click', handleClick);
document.getElementById('button').addEventListener('click', init);
document.getElementById('audio').addEventListener('click', toggleAudio)


// Functions

// Initialize
function init() {
    board = [null, null, null, null, null, null, null, null, null]
    turn = 1;
    isWinner = null;
    render();
}

// Click Handler
function handleClick(evt) {
    if (!isWinner) {
        let sqIdx = (parseInt(evt.target.id.replace('sq', '')))
        if (board[sqIdx] === null) {
            board[sqIdx] = turn
            getWinner();
            turn *= -1
            render();
        }
    }
}


// Check Winner
function getWinner() {
    winningCombos.forEach(function (square) {
        let total = 0;
        square.forEach(function (val) {
            total = total + board[val]
        });
        if (Math.abs(total) === 3) {
            isWinner = board[square[0]]
        }
    });
    if (!isWinner) {
        if (!board.includes(null)) {
            isWinner = 'T';
        }
    }
}

function render() {
    boardEl.forEach((square, idx) => {
        if (player[board[idx]] == 'X') {

            square.innerHTML = '<img src="images/gun.png">';
        }

        else if (player[board[idx]] == 'O') {
            square.innerHTML = '<img src="images/shot.png">';
        }
        else if (board[idx] == null) {
            square.innerHTML = ''
        }

    })

    if (isWinner === 1) {
        msgDiv.textContent = `Player X wins!`;
        audioEnd1.volume = 0.5;
        audioEnd2.volume = 0.5;
        audioEnd1.play();
        audioEnd2.play();
    } else if (isWinner === -1) {
        msgDiv.textContent = `Player O wins!`;
        audioEnd1.volume = 0.5;
        audioEnd2.volume = 0.5;
        audioEnd1.play();
        audioEnd2.play();
    } else if (isWinner === 'T') {
        msgDiv.textContent = `It's a tie! Try again!`;
        audioEnd1.volume = 0.5;
        audioEnd2.volume = 0.5;
        audioEnd1.play();
        audioEnd2.play();
    } else {
        if (turn === 1) {
            msgDiv.innerText = `Player X, it's your turn`;
            audioX.volume = 0.5;
            audioX.play();
        } else {
            msgDiv.innerText = `Player O, it's your turn`;
            audioX.volume = 0.5;
            audioO.play();
        }
    }
}

//Function for audio effects. Toggle on/off
function toggleAudio() {
    if (!sound) {
        sound = true;
        audioBackground.volume = 0.5;
        audioBackground.play();
        audio.style.backgroundImage = "url('images/audioOn.png')";
    }
    else {
        sound = false;
        audioBackground.pause();
        audio.style.backgroundImage = "url('images/audioOff.png')";
    }
}

init();