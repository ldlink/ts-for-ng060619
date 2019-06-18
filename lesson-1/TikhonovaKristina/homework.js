"use strict";
// #1
const isInArray = (arr, ...args) => {
    return args.every((argItem) => {
        return arr.indexOf(argItem) !== -1;
    });
};
console.log(isInArray([1, 4, 7], 1, 4, 7)); // true
console.log(isInArray([1, 4, 7], 1, 4, 5)); // false
console.log(isInArray([1, '4', 7], 1, '4', 7)); // true
// #2
const summator = (...args) => {
    return args.reduce((sum, current) => sum + +current, 0);
};
console.log(summator(1, 2, 3)); // 6
console.log(summator(67, 55, 10034)); // 10156
// #3
const getUnique = (...args) => {
    const resultArr = [];
    args.forEach((argsItem) => {
        if (resultArr.indexOf(argsItem) === -1) {
            resultArr.push(argsItem);
        }
    });
    return resultArr;
};
console.log(getUnique(1, 5, 6, 6, 'a', 'a')); // [ 1, 5, 6, 'a' ]
console.log(getUnique(1, 1, 1, '1', '1')); // [ 1, '1' ]
// #4
const toMatrix = (data, rowSize) => {
    const resultMatrix = [];
    for (let i = 0; i < data.length; i += rowSize) {
        resultMatrix.push(data.slice(i, i + rowSize));
    }
    const lastRow = resultMatrix[resultMatrix.length - 1];
    if (lastRow.length < rowSize) {
        for (let i = 0; lastRow.length < rowSize; i++) {
            lastRow.push(0);
        }
    }
    return resultMatrix;
};
console.log(toMatrix([1, 2, 3, 4, 5], 3));
console.log(toMatrix([1, 2, 3, 4, 5, '6', '7', '8', '9', '10'], 3));
