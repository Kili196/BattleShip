
const gameBoardConstructor = require("./modules/gameboard")


let newGameBoard = new gameBoardConstructor();


newGameBoard.placeShip(newGameBoard.ships.Carrier, 1, 1, true);

newGameBoard.placeShip(newGameBoard.ships.Submarine, 1, 2, false);



console.log(newGameBoard.gameboard);
