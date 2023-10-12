// Function written for `flatten`

const nestedArray = [1, [2], [[3]], [[[4]]]];

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
console.log(nestedArray)
console.log(flatten(nestedArray))