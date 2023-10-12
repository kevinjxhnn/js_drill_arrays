// Function written for `reduce`

function reduce(items, cb, startingValue) {
    
    if(items.length === 0 && startingValue === undefined){
        throw new Error("We can't reduce empty array with no initial value")
    }

    let accumulator = startingValue !== undefined ? startingValue : items[0];

    for(let i = startingValue === undefined ? 1 : 0; i < items.length; i++){
        accumulator = cb(accumulator, items[i])
    }

    return accumulator
}

module.exports = { reduce }
