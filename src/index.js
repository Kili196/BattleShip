import "./style.css"

function getDomElements() {
    const gameBoards = document.getElementsByClassName("game-boards")[0];


    return ({ gameBoards })
}


function createGameBoardGui() {
    const gameBoards = getDomElements().gameBoards;

    const gameBoard = document.createElement("div");
    gameBoard.className = "gameBoard";

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

    gameBoards.appendChild(gameBoard);



}


createGameBoardGui();
createGameBoardGui();


