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

    placeShip(ship, coordinateX, coordinateY) {

    }
}