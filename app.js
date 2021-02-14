document.addEventListener('DOMContentLoaded', () => {
    const gameBoardContainer = document.querySelector('.game-board')
    
    let board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    
    const place = (y, x) => {
        board[y][x] = 1;
        console.table(board);
        renderBoard()
    };
    
    const renderBoard = () => {
        board.forEach((row, y) => {
            row.forEach((col, x) => {
                const cell = document.createElement('div')
                gameBoardContainer.appendChild(cell)
            });
        });
    };

    renderBoard()
})

