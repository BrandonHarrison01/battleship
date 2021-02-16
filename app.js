document.addEventListener('DOMContentLoaded', () => {
    const gameBoardContainer = document.querySelector('.game-board')
    const shipCells = document.querySelectorAll('.ship-cell')
    const ships = document.querySelectorAll('.ship') 
    const carrier = document.querySelector('.carrier')
    const battleship = document.querySelector('.battleship')
    const cruiser = document.querySelector('.cruiser')
    const submarine = document.querySelector('.submarine')
    const destroyer = document.querySelector('.destroyer')
    const rotateButton = document.getElementById('rotate-btn')
    let isVertical = true

    const shipsArray = ['cell', 'carrier', 'battleship', 'cruiser', 'submarine', 'destroyer', 'hit', 'miss']
    
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

    const dragOver = (e) => {
        e.preventDefault()
    }

    const drop = (e) => {
        e.preventDefault()

        const droppedCoordinates = e.target.id
        console.log(droppedCoordinates, 'dropped')

        renderBoard()
    }
    
    const renderBoard = () => {
        board.forEach((row, y) => {
            row.forEach((col, x) => {
                const cell = document.createElement('div')
                cell.addEventListener("dragover", dragOver)
                cell.addEventListener("drop", drop)
                cell.className = shipsArray[col]
                cell.id = `${y}, ${x}`
                gameBoardContainer.appendChild(cell)
            });
        });
    };

    const allCells = document.querySelectorAll('.cell')

    const rotate = () => {
        carrier.classList.toggle('carrier-horizontal')
        battleship.classList.toggle('battleship-horizontal')
        cruiser.classList.toggle('cruiser-horizontal')
        submarine.classList.toggle('submarine-horizontal')
        destroyer.classList.toggle('destroyer-horizontal')
        isVertical ? isVertical = false : isVertical = true
        return
    }

    
    renderBoard()

    let selectedShip
    let selectedCell
    let shipLength

    rotateButton.addEventListener("click", rotate)

    shipCells.forEach(ship => ship.addEventListener("mousedown", e => {
        selectedShip = e.target.id.split("-")
        selectedCell = selectedShip[1]
        selectedShip = selectedShip[0]

        console.log(shipsArray[selectedShip], "ship")
        console.log(selectedCell, "selectedCell")
    }))
    
    ships.forEach(ship => ship.addEventListener("dragstart", e => {
        shipLength = (e.target.childNodes.length - 1) / 2

        console.log(shipLength, "shipLength")
    }))
    
    // allCells.forEach(ship => ship.addEventListener("dragover", () => console.log('over')))

    // allCells.forEach(ship => ship.addEventListener("drop", drop))
    
})

