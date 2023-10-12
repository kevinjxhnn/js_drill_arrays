// Function written for `filter`

function filter(items, cb){
    let newArray = []

    for(let i = 0; i < items.length; i++){

        if(cb(items[i])){
            newArray.push(items[i])
        }
    }

    return newArray
}

module.exports = { filter }
