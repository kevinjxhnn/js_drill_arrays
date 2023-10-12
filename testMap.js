const { map } = require("./map")
const items = require("./testArray")

// const items = []

console.log(items)

function cb(element) {
    return element * 2;
}

const transformedArray = map(items, cb)

console.log(transformedArray)

