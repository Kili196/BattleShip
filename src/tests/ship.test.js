const Ship = require("../modules/ship");



// Test the Ship constructor
test("test ship constructor", () => {

    let carrier = new Ship("Carrier", 5);
    expect(carrier).toEqual({ name: "Carrier", hits: 0, length: 5 });


    carrier.hit();

    expect(carrier).toEqual({ name: "Carrier", hits: 1, length: 5 });


});
