const multiplication = require("../functions/multiplication");

test("multiplying 2 & 3 to be equal to 6", () => {
    expect(multiplication(2, 3)).toBe(6);
});
