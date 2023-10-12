// Function written for `flatten`

function flatten(nestedArray){

    let flatArray = [];

    nestedArray.forEach(element => {
        if(Array.isArray(element)){
            flatArray = flatArray.concat(flatten(element))

        } else {
            flatArray.push(element)
        }
    });

    return flatArray;
}

module.exports = { flatten }