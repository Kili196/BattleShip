import "./style.css"
const GameBoard = require("./modules/gameboard")

let currentShip = null;
const playerGameBoard = new GameBoard()
const computerBoard = new GameBoard();


function getDomElements() {
    const gameBoards = document.getElementsByClassName("game-boards")[0];
    return ({ gameBoards })
}

function gameBoardCellAction(gameBoardCellId) {

    const placementCords = gameBoardCellId.split("/");
    let coordinateY = placementCords[0];
    let coordinateX = placementCords[1];

    if (currentShip != null) {
        for (let i = 0; i < currentShip.length; i++) {
            //-1 cause of the array index
            const currentCell = document.getElementById(`${coordinateY}/${coordinateX}`);
            currentCell.style.backgroundColor = "red";
            coordinateX++;
            console.log(currentCell);
        }

    }
}


function createGameBoardGui() {

    const gameBoards = getDomElements().gameBoards;
    const gameBoard = document.createElement("div");
    const gameBoardContainer = document.createElement("div");
    gameBoard.className = "gameBoard";
    gameBoardContainer.classList = "gameBoardContainer";
    const ships = ["Carrier", "Submarine", "Battleship"];
    for (let i = 1; i < 11; i++) {
        let gameBoardRow = document.createElement("div");
        gameBoardRow.className = "gameBoardRow";
        for (let x = 1; x < 11; x++) {
            let gameBoardCell = document.createElement("div");
            gameBoardCell.className = "gameBoardCell";
            gameBoardCell.id = `${x}/${i}`;
            gameBoardRow.appendChild(gameBoardCell);
            gameBoardCell.addEventListener("click", () => gameBoardCellAction(gameBoardCell.id));
        }

        gameBoard.appendChild(gameBoardRow);
    }

    gameBoardContainer.appendChild(gameBoard);



    //generate Ship selection for gui
    const shipSelectionContainer = document.createElement("div");
    shipSelectionContainer.className = "shipSelectionContainer";
    ships.forEach((element) => {
        const shipButton = document.createElement("button");
        shipButton.textContent = element;
        shipButton.className = "shipButton";
        shipSelectionContainer.appendChild(shipButton);

        shipButton.addEventListener("click", () => {

            currentShip = playerGameBoard.ships[shipButton.textContent];
            console.log(currentShip);
        });


    })
    gameBoardContainer.appendChild(shipSelectionContainer);
    gameBoards.appendChild(gameBoardContainer);
}


function startGame() {
    createGameBoardGui();
    createGameBoardGui();




}


startGame();









