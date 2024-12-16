module.exports = class Gameboard {
    constructor() {
        this.gameboard = Array.from({ length: 100 }, () => []);
    }
}