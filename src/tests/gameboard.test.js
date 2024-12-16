const gameBoardConstructor = require("../modules/gameboard")

let gameBoard;


beforeEach(() => {
    gameBoard = new gameBoardConstructor();
})

test("Test gameBoard construcotr", () => {
    expect(new gameBoardConstructor()).toBeDefined();
})