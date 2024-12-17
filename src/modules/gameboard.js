const Ship = require("./ship");

module.exports = class Gameboard {
    constructor() {
        this.gameboard = Array.from({ length: 10 }, () => Array(10).fill([]));
        this.ships = {
            "Carrier": new Ship("Carrier", 5),
            "Battleship": new Ship("Battleship", 4),
            "Submarine": new Ship("Submarine", 3),
        }
    }


    //placing ships vertically working --> not checking for errors yet
    placeShip(ship, coordinateY, coordinateX, isVertical) {
        if (!(ship instanceof Ship)) {
            throw new Error("Not the right ship");
        }

        else if (coordinateY > 10 || coordinateY < 1 || coordinateX > 10 || coordinateX < 1) {
            throw new Error("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1")
        }


        if (isVertical) {
            for (let i = 0; i < ship.length; i++) {
                this.gameboard[coordinateY - 1][coordinateX - 1] = ship;
                coordinateY++;
            }
        }

        else {
            for (let i = 0; i < ship.length; i++) {
                this.gameboard[coordinateY - 1][coordinateX - 1] = ship;
                coordinateX++;
            }
        }
        return 1;
    }
}