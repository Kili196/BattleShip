const gameBoardConstructor = require("../modules/gameboard")
const shipConstructor = require("../modules/ship")

let gameBoardObject;


beforeEach(() => {
    gameBoardObject = new gameBoardConstructor();
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
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), -3, 3)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 0, 1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 0, -1)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 0, 0)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1");
    expect(() => gameBoardObject.placeShip(new shipConstructor("Carrier", 3), 1, 11)).toThrow("CoordinateY > 10 or < 1 or CoordianteX > 9 or < 1");
})


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

//test if placing ship works
