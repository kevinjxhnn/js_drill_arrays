const items = require("./testArray")
const { find } = require("./find")



function cb(element){
    return element == 90;
}

console.log(find(items, cb))


