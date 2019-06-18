"use strict";
// tslint:disable:no-console
console.warn('1. isInArray()');
function isInArray(arr = [], ...args) {
    let isInArr = args.length > 0;
    console.log('arr:', arr, 'args:', args);
    args.forEach((arg) => {
        if (arr.indexOf(arg) === -1) {
            isInArr = false;
        }
    });
    return isInArr;
}
console.log(isInArray([1, 2, 3], 'a', 1, 3));
console.log(isInArray([1, 2, 3], '2', 1, 3));
console.log(isInArray([1, 2, 3], 2, 1));
console.log(isInArray([null, 2, 3], 2, null, 3));
console.log(isInArray([null, false, 3], 3, null, false));
console.log(isInArray([], 1));
console.warn('2. summator()');
function summator(...args) {
    let sum = 0;
    let i = 0;
    for (; i < args.length; i++) {
        sum += parseInt(String(args[i]), 10);
    }
    return sum;
}
console.log(summator(1, '2', 3));
console.log(summator(0xff, '2'));
console.log(summator(-Infinity, 1));
console.warn('3. getUnique()');
function getUnique(...args) {
    return args.filter((arg, index, arr) => arr.indexOf(arg) === index);
}
console.log(getUnique(1, 1, 1));
console.log(getUnique(1, 2, '1'));
console.log(getUnique(null, 25, 2, 5, true, false));
console.warn('4. toMatrix()');
function toMatrix(data = [], rowSize = 1) {
    const result = [];
    let i = 0;
    if (rowSize > 0) {
        for (; i < data.length; i += rowSize) {
            result.push(data.slice(i, i + rowSize));
        }
    }
    return result;
}
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
console.log(toMatrix([1, '2', 3, undefined, 5, 6, 7, 8, 9], 2));
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 0));
console.log(toMatrix([], 2));
