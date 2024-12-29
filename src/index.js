import "./style.css"

function getDomElements() {
    const gameBoards = document.getElementsByClassName("game-boards")[0];


    return ({ gameBoards })
}


function createGameBoardGui() {
    const gameBoardDiv = getDomElements().gameBoards;

    const gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";

    for (let i = 0; i < 100; i++) {
        const gameboardCell = document.createElement("div");
        gameboardCell.className = "gameBoardCell";
        gameboardCell.innerHTML = " ";
        gameBoard.appendChild(gameboardCell);
    }
    gameBoardDiv.appendChild(gameBoard);


}


createGameBoardGui();


