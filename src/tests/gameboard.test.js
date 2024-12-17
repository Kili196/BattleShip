const gameBoardConstructor = require("../modules/gameboard")
const shipConstructor = require("../modules/ship")

let gameBoardObject;


beforeEach(() => {
    gameBoardObject = new gameBoardConstructor();
})

test("Test gameBoard construcotr", () => {

    console.log(gameBoardObject.gameboard)
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




    expect(gameBoardObject.gameboard[0][0]).toEqual(gameBoardObject.ships.Carrier);

})

//test if placing ship works
