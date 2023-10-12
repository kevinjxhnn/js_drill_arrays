// Function written for `each`

function each(elements, cb){

    if(elements.length === 0){
        throw new Error("Empty Array")
    }

    for(let i = 0; i < elements.length; i++){
        cb(elements[i], i);
    }
    
}

module.exports = { each }