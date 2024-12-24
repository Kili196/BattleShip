const Ship = require("../modules/ship");

let carrier;


//generating object before test
beforeEach(() => {
    carrier = new Ship("Carrier", 3);
})

// Test the Ship constructor
test("test ship constructor", () => {
    expect(carrier).toEqual({ name: "Carrier", hits: 0, length: 3 });
});


//Test if the hit method 
test("test the hit method!", () => {
    carrier.hit();
    expect(carrier).toEqual({ name: "Carrier", hits: 1, length: 3 });
    expect(carrier.isSunk()).toBe(false);
});

//Test if the hit method 
test("test sunken Method!", () => {

    //carrier gets hit three times so isSunk returns true
    carrier.hit();
    carrier.hit();
    carrier.hit();
    expect(carrier).toEqual({ name: "Carrier", hits: 3, length: 3 });
    //check if isSunk function really returns true
    expect(carrier.isSunk()).toBe(true);
});

