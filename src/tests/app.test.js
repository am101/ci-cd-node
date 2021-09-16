const calculator = require("../app");

test("adds 2 & 3 to be equal to 5", () => {
    expect(calculator("2+3")).toBe(5);
})

test("subtracts 2 from 5 to be equal to 3", () => {
    expect(calculator("2-5")).toBe(3);
})

test("multiplies 2 & 3 to be equal to 6", () => {
    expect(calculator("2*3")).toBe(6);
})
test("division 10 by 2 to be equal to 5", () => {
    expect(calculator("10/2")).toBe(5);
})