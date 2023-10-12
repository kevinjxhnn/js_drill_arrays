const {filter} = require("./filter")
const items = require("./testArray")

function cb(element){
    return element % 2 == 2;
}

console.log(items)
const filteredArray = filter(items, cb)
console.log(filteredArray)