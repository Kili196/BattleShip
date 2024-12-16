const Ship = require("./ship");

module.exports = class Gameboard {
    constructor() {
        this.gameboard = Array.from({ length: 10 }, () => Array(10).fill([]));
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

        let count = 1;



        while (count <= ship.length) {

            console.log(coordinateY - 1 + " y")
            console.log(coordinateX - 1 + " x")
            this.gameboard[coordinateY - 1][coordinateX - 1] = ship;
            coordinateY++;
            count++;
        }
        return 1;
    }
}