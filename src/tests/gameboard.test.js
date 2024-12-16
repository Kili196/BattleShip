const gameBoard = require("../modules/gameboard")




test("Test gameBoard construcotr", () => {
    expect(new gameBoard()).toBeDefined();
})