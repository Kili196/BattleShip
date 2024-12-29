
const gameBoardConstructor = require("./modules/gameboard")


let gameBoardObject = new gameBoardConstructor();

gameBoardObject.placeShip(gameBoardObject.ships.Carrier, 1, 1, true);
gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 3, 5, false);


//missed shot
gameBoardObject.receiveAttack(4, 2);
//sink carrier
gameBoardObject.receiveAttack(1, 1);
gameBoardObject.receiveAttack(2, 1);
gameBoardObject.receiveAttack(3, 1);
gameBoardObject.receiveAttack(4, 1);
gameBoardObject.receiveAttack(5, 1);

//sink battelship
gameBoardObject.receiveAttack(3, 5);
gameBoardObject.receiveAttack(3, 6);
gameBoardObject.receiveAttack(3, 7);
gameBoardObject.receiveAttack(3, 8);



gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 1, 7, false);



console.log(gameBoardObject.gameboard)