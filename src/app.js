const addition = require("./functions/addition");
const subtraction = require("./functions/subtraction");
const multiplication = require("./functions/multiplication")
const division = require("./functions/division")

const calculator = function(funcString) {
    if(funcString.includes("+")){
        funcString = funcString.split("+")
        return addition(funcString[0], funcString[1])
    }
    if(funcString.includes("-")){
        funcString = funcString.split("-")
        return subtraction(funcString[0], funcString[1])
    }
    if(funcString.includes("*")){
        funcString = funcString.split("*")
        return multiplication(funcString[0], funcString[1])
    }
    if(funcString.includes("/")){
        funcString = funcString.split("/")
        return division(funcString[0], funcString[1])
    }
}

calculator("112+222")


module.exports = calculator;

