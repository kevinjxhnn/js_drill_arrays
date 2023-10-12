const { flatten } = require("./flatten")

const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(nestedArray)
console.log(flatten(nestedArray))
