// Function written for `find`

function find(items, cb){
    let flag = false

    for(let i = 0; i < items.length; i++){
        flag = cb(items[i])
        
        if(flag){
            return items[i];
        }
    }

    return undefined

}

module.exports = { find }

