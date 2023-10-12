// Function written for `map`

function map(elements, cb) {

    if(elements.length === 0){
        throw new Error("Empty Array")
    }

    const newArray = []
    for(let i = 0; i < elements.length; i++){
        newArray.push(cb(elements[i]))
    }

    return newArray
}

module.exports = { map }
