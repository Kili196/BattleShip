const Ship = require("./ship");

module.exports = class Gameboard {
    constructor() {
        this.gameboard = Array.from({ length: 10 }, () => Array(10).fill(undefined));
        this.ships = {
            "Carrier": new Ship("Carrier", 5),
            "Battleship": new Ship("Battleship", 4),
            "Submarine": new Ship("Submarine", 3),
        }

        this.placedShips = [];

        this.missedShots = 0;

    }

    isPlacementValid(gameBoard, coordinateY, coordinateX, ship, isVertical) {
        if (isVertical) {
            for (let i = 0; i < ship.length; i++) {
                if ((gameBoard[coordinateY - 1][coordinateX - 1]) != undefined) {
                    return false;
                }
                coordinateY++;
            }
        }
        else {

            for (let i = 0; i < ship.length; i++) {
                if (gameBoard[coordinateY - 1][coordinateX - 1] != undefined) {
                    return false;
                }
                coordinateX++;
            }
        }

        return true;
    }



    //placing ships vertically working --> not checking for errors yet
    placeShip(ship, coordinateY, coordinateX, isVertical) {
        if (!(ship instanceof Ship)) {
            throw new Error("Not the right ship");
        }

        else if (coordinateY > 10 || coordinateY < 1 || coordinateX > 10 || coordinateX < 1) {
            throw new Error("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1")
        }

        if (this.isPlacementValid(this.gameboard, coordinateY, coordinateX, ship, isVertical)) {

            this.placedShips.push(ship);
            for (let i = 0; i < ship.length; i++) {
                this.gameboard[coordinateY - 1][coordinateX - 1] = ship;
                isVertical ? coordinateY++ : coordinateX++;
            }
            return 1;
        }
        return -1;
    }

    //returning 1 if hit and -1 if not
    receiveAttack(coordinateY, coordinateX) {
        if (coordinateY > 10 || coordinateY < 1 || coordinateX > 10 || coordinateX < 1) {
            throw new Error("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1")
        }

        if (this.gameboard[coordinateY - 1][coordinateX - 1] != undefined) {
            this.gameboard[coordinateY - 1][coordinateX - 1].hit();
            return 1;
        }
        this.missedShots++;
        return -1;
    }

    allShipsSunk() {
        for (const ship in this.placedShips) {
            if (!(this.placedShips[ship].isSunk())) {
                return false;
            }
        }
        return true;
    }






}