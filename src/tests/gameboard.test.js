const gameBoardConstructor = require("../modules/gameboard")
const shipConstructor = require("../modules/ship")

let gameBoardObject;


beforeEach(() => {
    gameBoardObject = new gameBoardConstructor();
    gameBoardObject.placeShip(gameBoardObject.ships.Carrier, 1, 1, true);
    gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 3, 5, false);
})

test("Test gameBoard construcotr", () => {
    expect(new gameBoardConstructor()).toBeDefined();
})

test("Test size of gameboard", () => {
    expect(gameBoardObject.gameboard.length).toBe(10);
})

test("Test the ships of a gameboard", () => {
    expect(gameBoardObject.ships).toEqual({
        "Carrier": new shipConstructor("Carrier", 5),
        "Battleship": new shipConstructor("Battleship", 4),
        "Submarine": new shipConstructor("Submarine", 3)
    })
})

test("Test if the placeShip function exist", () => {
    expect(gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 3, 3)).toBeDefined();
})

test("Test if the placeShip function throws Error", () => {
    expect(() => gameBoardObject.placeShip("Hallo", 3, 3)).toThrow("Not the right ship");
})


//test for the wrong coordiantes of placeship

test("Test if the placeShip function throws Error for incorrect coordinates", () => {
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), -3, 3)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 0, 1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 0, -1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 0, 0)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 1, 11)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
})

//test if placing ship works
describe("Test placeship function", () => {
    beforeEach(() => {
        gameBoardObject.placeShip(gameBoardObject.ships.Carrier, 1, 1, true);
        gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 3, 5, false);
        gameBoardObject.placeShip(gameBoardObject.ships.Submarine, 1, 1, true);
        gameBoardObject.placeShip(gameBoardObject.ships.Battleship, 2, 6, true);
    })


    test("Testing if ship is placed in first row", () => {
        expect(gameBoardObject.gameboard[0][0]).toEqual(gameBoardObject.ships.Carrier);
    })

    test("Testing if ship is placed in right row and is placed horizontal", () => {
        expect(gameBoardObject.gameboard[2][7]).toEqual(gameBoardObject.ships.Battleship);
    })


    test("Testing if ship being placed over other ship is not working", () => {
        expect(gameBoardObject.gameboard[1][0]).toEqual(gameBoardObject.ships.Carrier);
        expect(gameBoardObject.gameboard[1][5]).toBeUndefined();
    })



})


describe("Testing of the function receiveAttack", () => {

    beforeEach(() => {
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

    })


    test("Test for wrong values", () => {
        expect(() => gameBoardObject.receiveAttack(11, 1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
        expect(() => gameBoardObject.receiveAttack(9, 11)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
        expect(() => gameBoardObject.receiveAttack(0, 1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
        expect(() => gameBoardObject.receiveAttack(1, -1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 10 or < 1");
    })

    test("Test if receiveAttack function is defined", () => {
        expect(gameBoardObject.receiveAttack(1, 1)).toBeDefined();
    })

    test("Test if hits of object gets increased when using receiveAttack function", () => {
        expect(gameBoardObject.ships.Carrier.hits).toBe(5);
    })
    test("Test if -1 is returned if not hitting ship", () => {
        expect(gameBoardObject.receiveAttack(5, 5)).toBe(-1);
    })
    test("Test if 1 is returned if hitting ship", () => {
        expect(gameBoardObject.receiveAttack(1, 1)).toBe(1);
    })

    test("Test if missedShots of gameboard is safed right", () => {
        expect(gameBoardObject.missedShots).toBe(1);
    })


    describe("Place one more ship", () => {
        beforeEach(() => {
            gameBoardObject.placeShip(gameBoardObject.ships.Submarine, 7, 3, true)
        })

        test("Test if all ships are sunken is false", () => {
            expect(gameBoardObject.allShipsSunk()).toBe(false)
        })
    })


    test("Test if all ships are sunken is true", () => {
        expect(gameBoardObject.allShipsSunk()).toBe(true)
    })













})

