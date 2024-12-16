const Ship = require("./ship");

module.exports = class Gameboard {
    constructor() {
        this.gameboard = Array.from({ length: 100 }, () => []);
        this.ships = {
            "Carrier": new Ship("Carrier", 5),
            "Battleship": new Ship("Carrier", 4),
            "Carrier": new Ship("Carrier", 3),
            "Submarine": new Ship("Carrier", 3),
        }
    }

    placeShip(ship, coordinateY, coordinateX) {


        if (!(ship instanceof Ship)) {
            throw new Error("Not the right ship");
        }

        else if (coordinateY > 10 || coordinateY < 1 || coordinateX > 10 || coordinateX < 1) {
            throw new Error("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1")
        }

        return 1;
    }
}