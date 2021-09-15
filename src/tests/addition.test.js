const addition = require("../functions/addition");

test("adds 2 & 3 to be equal to 5", () => {
    expect(addition(2, 3)).toBe(5);
});
