import "./style.css"

function getDomElements() {
    const gameBoards = document.getElementsByClassName("game-boards")[0];
    return ({ gameBoards })
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
            gameBoardCell.addEventListener("click", () => console.log(gameBoardCell.id));
        }

        gameBoard.appendChild(gameBoardRow);
    }

    gameBoardContainer.appendChild(gameBoard);


    const shipSelectionContainer = document.createElement("div");
    shipSelectionContainer.className = "shipSelectionContainer";

    ships.forEach((element) => {
        const shipButton = document.createElement("button");
        shipButton.textContent = element;
        shipButton.className = "shipButton";

        shipSelectionContainer.appendChild(shipButton);
    })

    gameBoardContainer.appendChild(shipSelectionContainer);

    gameBoards.appendChild(gameBoardContainer);



}


createGameBoardGui();
createGameBoardGui();


