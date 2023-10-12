const { each } = require("./each")
const items = require("./testArray")

// const items = []

function cb(element, index){
    console.log(`Element at index ${index}: ${element}`);
}

each(items, cb)