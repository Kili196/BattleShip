
const gameBoardConstructor = require("./modules/gameboard")


let newGameBoard = new gameBoardConstructor();

console.log(newGameBoard.gameboard);

newGameBoard.placeShip(newGameBoard.ships.Carrier, 1, 1);

newGameBoard.placeShip(newGameBoard.ships.Battleship, 4, 3);



