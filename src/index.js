import "./style.css"
const GameBoard = require("./modules/gameboard")


let isComputersTurn = false;
let currentShip = null;
const playerGameBoard = new GameBoard()
const computerBoard = new GameBoard();



function getDomElements() {
    const gameBoards = document.getElementsByClassName("game-boards")[0];
    return ({ gameBoards })
}

function gameBoardCellActionForPlacingShips(gameBoardCellId) {
    const placementCords = gameBoardCellId.split("/");
    let coordinateY = placementCords[0];
    let coordinateX = placementCords[1];
    if (currentShip != null) {


        if (playerGameBoard.placeShip(currentShip, coordinateY, coordinateX, true) == 1) {
            for (let i = 0; i < currentShip.length; i++) {
                const currentCell = document.getElementById(`${coordinateY}/${coordinateX}`);
                currentCell.style.backgroundColor = "red";
                coordinateY++;
            }
            currentShip = null;
        }
    }

    console.log(playerGameBoard);
}


//yet to be programmed
function placeShipsForComputer() {
    const ships = ["Carrier", "Submarine", "Battleship"];
    ships.forEach((element) => {

    })
    Math.random() * (11 - 1) + 1;

}


function createGameBoardGui(isComputer) {
    const gameBoards = getDomElements().gameBoards;
    const gameBoard = document.createElement("div");
    const gameBoardContainer = document.createElement("div");
    gameBoard.className = "gameBoard";
    gameBoardContainer.classList = "gameBoardContainer";


    //generating board 10x10
    for (let i = 1; i < 11; i++) {
        let gameBoardRow = document.createElement("div");
        gameBoardRow.className = "gameBoardRow";
        for (let x = 1; x < 11; x++) {
            let gameBoardCell = document.createElement("div");
            gameBoardCell.className = "gameBoardCell";
            gameBoardCell.id = `${x}/${i}`;
            gameBoardRow.appendChild(gameBoardCell);
            //only adding placing ship option if board is not a computer
            !isComputer ? gameBoardCell.addEventListener("click", () => gameBoardCellActionForPlacingShips(gameBoardCell.id)) : null;
        }

        gameBoard.appendChild(gameBoardRow);
    }

    gameBoardContainer.appendChild(gameBoard);
    !isComputer ? generateShipSelectionUI(gameBoardContainer) : null;
    gameBoards.appendChild(gameBoardContainer);
}


function generateShipSelectionUI(gameBoardContainer) {
    const ships = ["Carrier", "Submarine", "Battleship"];
    const shipSelectionContainer = document.createElement("div");
    shipSelectionContainer.className = "shipSelectionContainer";
    ships.forEach((element) => {
        const shipButton = document.createElement("button");
        shipButton.textContent = element;
        shipButton.className = "shipButton";
        shipSelectionContainer.appendChild(shipButton);
        shipButton.addEventListener("click", () => {
            currentShip = playerGameBoard.ships[shipButton.textContent];
            shipSelectionContainer.removeChild(shipButton);
            ships.pop();
        });

        gameBoardContainer.appendChild(shipSelectionContainer);
    })
}



function generateUi() {
    createGameBoardGui(false);
    createGameBoardGui(true);
}


generateUi();











