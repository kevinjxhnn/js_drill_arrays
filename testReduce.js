const { reduce } = require("./reduce")
const items = require("./testArray")

function cb(itermediateAnswer, element){
    return itermediateAnswer + element;
}

const reduceAnswer = reduce(items, cb)

console.log(reduceAnswer)

