const gameBoardConstructor = require("../modules/gameboard")

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