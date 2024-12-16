module.exports = class Ship {
    constructor(name, length) {
        this.name = name;
        this.hits = 0;
        this.length = length;
    }
    hit() {
        this.hits++;
    }

    isSunk() {
        return this.hits == this.length;
    }
}

