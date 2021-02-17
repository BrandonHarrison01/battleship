document.addEventListener("DOMContentLoaded", () => {
	const gameBoardContainer = document.querySelector(".game-board");
	const shipCells = document.querySelectorAll(".ship-cell");
	const ships = document.querySelectorAll(".ship");
	const carrier = document.querySelector(".carrier");
	const battleship = document.querySelector(".battleship");
	const cruiser = document.querySelector(".cruiser");
	const submarine = document.querySelector(".submarine");
	const destroyer = document.querySelector(".destroyer");
	const rotateButton = document.getElementById("rotate-btn");
	let isVertical = true;

	const shipsArray = [
		"cell",
		"carrier",
		"battleship",
		"cruiser",
		"submarine",
		"destroyer",
		"hit",
		"miss",
	];

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

	const dragOver = (e) => {
		e.preventDefault();
	};

	const drop = (e) => {
		e.preventDefault();

		const cellsToEnd = shipLength - selectedCell;
		const droppedCoordinates = e.target.id.split(",");
		const y = parseInt(droppedCoordinates[0]);
		const x = parseInt(droppedCoordinates[1]);
		console.log(y, x);

		board[y][x] = selectedShip;
		document
			.getElementById(`${y},${x}`)
			.classList.add(shipsArray[selectedShip]);

		if (isVertical) {
			for (let i = 1; i <= selectedCell; i++) {
				board[y - i][x] = selectedShip;
				document
					.getElementById(`${y - i},${x}`)
					.classList.add(shipsArray[selectedShip]);
			}

			for (let i = 1; i < cellsToEnd; i++) {
				board[y + i][x] = selectedShip;
				document
					.getElementById(`${y + i},${x}`)
					.classList.add(shipsArray[selectedShip]);
			}
		} else {
			for (let i = 1; i <= selectedCell; i++) {
				board[y][x - i] = selectedShip;
				document
					.getElementById(`${y},${x - i}`)
					.classList.add(shipsArray[selectedShip]);
			}

			for (let i = 1; i < cellsToEnd; i++) {
				board[y][x + i] = selectedShip;
				document
					.getElementById(`${y},${x + i}`)
					.classList.add(shipsArray[selectedShip]);
			}
		}

		console.log(shipsArray[selectedShip]);

		switch (shipsArray[selectedShip]) {
			case "carrier":
				console.log("carrier");
				carrier.classList.add("hide");
				break;
			case "battleship":
				console.log("battleship");
				battleship.classList.add("hide");
				break;
			case "cruiser":
				cruiser.classList.add("hide");
				break;
			case "submarine":
				submarine.classList.add("hide");
				break;
			case "destroyer":
				destroyer.classList.add("hide");
				break;
		}

		console.table(board);
		// renderBoard()
	};

	const renderBoard = () => {
		board.forEach((row, y) => {
			row.forEach((col, x) => {
				const cell = document.createElement("div");
				cell.addEventListener("dragover", dragOver);
				cell.addEventListener("drop", drop);
				cell.className = shipsArray[col];
				cell.id = `${y},${x}`;
				gameBoardContainer.appendChild(cell);
			});
		});
	};

	const rotate = () => {
		carrier.classList.toggle("carrier-horizontal");
		battleship.classList.toggle("battleship-horizontal");
		cruiser.classList.toggle("cruiser-horizontal");
		submarine.classList.toggle("submarine-horizontal");
		destroyer.classList.toggle("destroyer-horizontal");
		isVertical ? (isVertical = false) : (isVertical = true);
		return;
	};

	renderBoard();

	let selectedShip;
	let selectedCell;
	let shipLength;

	rotateButton.addEventListener("click", rotate);

	shipCells.forEach((ship) =>
		ship.addEventListener("mousedown", (e) => {
			selectedShip = e.target.id.split("-");
			selectedCell = parseInt(selectedShip[1]);
			selectedShip = parseInt(selectedShip[0]);

			console.log(shipsArray[selectedShip], "ship");
			console.log(selectedCell, "selectedCell");
		})
	);

	ships.forEach((ship) =>
		ship.addEventListener("dragstart", (e) => {
			shipLength = (e.target.childNodes.length - 1) / 2;

			console.log(shipLength, "shipLength");
		})
	);

	// allCells.forEach(ship => ship.addEventListener("dragover", () => console.log('over')))

	// allCells.forEach(ship => ship.addEventListener("drop", drop))
});
