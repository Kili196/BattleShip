const Ship = require("../modules/ship");



// Test the Ship constructor
test("test ship constructor", () => {

    let carrier = new Ship("Carrier", 3);
    expect(carrier).toEqual({ name: "Carrier", hits: 0, length: 3 });
    carrier.hit();
    expect(carrier).toEqual({ name: "Carrier", hits: 1, length: 3 });
    expect(carrier.isSunk()).toBe(false);
    carrier.hit();
    carrier.hit();
    expect(carrier).toEqual({ name: "Carrier", hits: 3, length: 3 });
    expect(carrier.isSunk()).toBe(true);


});
