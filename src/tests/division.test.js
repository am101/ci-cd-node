const division = require("../functions/division");

test("dividing 10 by 5 to be equal to 2", () => {
    expect(division(10, 5)).toBe(2);
});
