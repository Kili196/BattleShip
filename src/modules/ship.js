export class Ship {
    constructor(name, length) {
        this.name = name;
        this.hits = 0;
        this.length = length;


        function hit() {
            this.hits++;
        }

        function isSunk() {
            return this.hits == this.length;
        }
    }
}
