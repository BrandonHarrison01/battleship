document.addEventListener('DOMContentLoaded', () => {
    const gameBoardContainer = document.querySelector('.game-board')
    const carrier = document.querySelector('.carrier')
    const battleship = document.querySelector('.battleship')
    const cruiser = document.querySelector('.cruiser')
    const submarine = document.querySelector('.submarine')
    const destroyer = document.querySelector('.destroyer')
    const rotateButton = document.getElementById('rotate-btn')
    let isVertical = true
    
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
                cell.className = "cell"
                gameBoardContainer.appendChild(cell)
            });
        });
        console.log('board rendered')
    };

    const rotate = () => {
        if(isVertical){
            carrier.classList.toggle('carrier-horizontal')
            battleship.classList.toggle('battleship-horizontal')
            cruiser.classList.toggle('cruiser-horizontal')
            submarine.classList.toggle('submarine-horizontal')
            destroyer.classList.toggle('destroyer-horizontal')
        }
    }

    
    renderBoard()
    rotateButton.addEventListener("click", rotate)
})

