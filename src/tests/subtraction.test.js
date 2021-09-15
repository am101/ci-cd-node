const subtraction = require("../functions/subtraction");

test("subtracting 2 from 5 to be equal to 3", () => {
    expect(subtraction(2, 5)).toBe(3);
});
