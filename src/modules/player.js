const Ship = require("./ship");
const GameBoard = require("./gameboard")


module.exports = class Player {
    constructor(isComputer) {
        this.gameBoard = new GameBoard();
        this.isComputer = isComputer;
    }




}