
const gameBoardConstructor = require("./modules/gameboard")


let gameBoardObject = new gameBoardConstructor();


gameBoardObject.placeShip(gameBoardObject.ships.Carrier, 1, 1, true);


gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 3, 5, false);

gameBoardObject.placeShip(gameBoardObject.ships.Submarine, 1, 1, true);

gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 2, 6, true);






console.log(gameBoardObject.gameboard);
console.log(gameBoardObject.receiveAttack(1, 1));
console.log(gameBoardObject.receiveAttack(2, 1));

console.log(gameBoardObject.ships.Carrier);