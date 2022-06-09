const myArray = [1, 2, 3, 4]

function reverseArr(input) {
    const ret = [];
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

function getAverage(numbers) {
    const sum = numbers.reduce((a,b) => a + b,0);

    return sum/numbers.length;
}

console.log(reverseArr(myArray))

console.log(getAverage([2,2,2]));























