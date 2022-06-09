const myArray = [1, 2, 3, 4]

function reverseArr(input) {
    const ret = [];
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

console.log(reverseArr(myArray))























