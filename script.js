let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`${board[a]} wins!`);
            return true;
        }
    }

    if (!board.includes('')) {
        alert("It's a draw!");
        return true;
    }

    return false;
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.innerText = '';
    }
}
