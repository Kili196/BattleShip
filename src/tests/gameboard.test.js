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
    expect(gameBoardObject.gameboard.length).toBe(100);
})

test("Test the ships of a gameboard", () => {
    expect(gameBoardObject.ships).toEqual({
        "Carrier": new shipConstructor("Carrier", 5),
        "Battleship": new shipConstructor("Carrier", 4),
        "Carrier": new shipConstructor("Carrier", 3),
        "Submarine": new shipConstructor("Carrier", 3)
    })
})