import "./style.css"
const GameBoard = require("./modules/gameboard")


let currentShip = null;
const playerGameBoard = new GameBoard()
const computerBoard = new GameBoard();


let isComputersTurn = false;




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
                currentCell.style.backgroundColor = "blue";
                coordinateY++;
            }
            currentShip = null;
        }
    }
}

function gameBoardListenerForPlayer(gameBoardCellId) {

    gameBoardCellActionForPlacingShips(gameBoardCellId);


}

function gameBoardListenerForComputer(gameBoardCellId) {
    if (playerGameBoard.placedShips.length == 3) {
        if (!isComputersTurn) {
            const placementCords = gameBoardCellId.split("/");
            let coordinateY = placementCords[0];
            let coordinateX = placementCords[1];
            let currentCell = document.querySelectorAll(`[id='${CSS.escape(`${coordinateY}/${coordinateX}`)}']`)[1];
            let shot = playerGameBoard.receiveAttack(coordinateY, coordinateX);
            shot == 1 ? currentCell.style.backgroundColor = "red" : currentCell.style.backgroundColor = "pink";

            isComputersTurn = true;
            setTimeout(computersTurn, 2000);
        }

    }

}

function computersTurn() {
    if (isComputersTurn) {
        let coordinateY = Math.round(Math.random() * (10 - 1) + 1);
        let coordinateX = Math.round(Math.random() * (10 - 1) + 1);
        let currentCell = document.querySelectorAll(`[id='${CSS.escape(`${coordinateY}/${coordinateX}`)}']`)[0];

        let shot = playerGameBoard.receiveAttack(coordinateY, coordinateX);

        shot == 1 ? currentCell.style.backgroundColor = "red" : currentCell.style.backgroundColor = "pink";

        isComputersTurn = false;
    }

    console.log(playerGameBoard);
    console.log(computerBoard);
}






//yet to be programmed
function placeShipsForComputer() {
    const ships = ["Carrier", "Submarine", "Battleship"];
    ships.forEach((element) => {
        let coordinateY = Math.round(Math.random() * (10 - 1) + 1);
        let coordinateX = Math.round(Math.random() * (10 - 1) + 1);


        computerBoard.placeShip(computerBoard.ships[element], coordinateY, coordinateX, true);
    })

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
            !isComputer ? gameBoardCell.addEventListener("click", () => gameBoardListenerForPlayer(gameBoardCell.id)) : gameBoardCell.addEventListener("click", () => gameBoardListenerForComputer(gameBoardCell.id));
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
            if (ships.length == 0) placeShipsForComputer();
        });

        gameBoardContainer.appendChild(shipSelectionContainer);
    })
}



function generateUi() {
    createGameBoardGui(false);
    createGameBoardGui(true);




}


generateUi();











