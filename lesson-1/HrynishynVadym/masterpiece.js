/* 1)
   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
   Возвращает true, если все аргументы, кроме первого входят в первый.
   Первым всегда должен быть массив.
*/
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    console.log("Array: " + arr + ",\n Arguments: " + rest);
    for (var i = 0, len = rest.length; i < len; i++) {
        if (typeof rest[i] !== 'object') {
            if (!~arr.indexOf(rest[i]))
                return false;
        }
        else {
            var isThereSuchAnObject = false;
            for (var i_1 = 0, len_1 = arr.length; i_1 < len_1; i_1++) {
                if (typeof arr[i_1] === 'object' && JSON.stringify(arr[i_1]) === JSON.stringify(rest[i_1])) {
                    isThereSuchAnObject = true;
                }
            }
            if (!isThereSuchAnObject)
                return false;
        }
    }
    return true;
}
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (typeof args[0] === 'number') {
        return args.reduce(function (sum, currentVal) {
            return sum + currentVal;
        });
    }
    else if (typeof args[0] === 'string') {
        return args.reduce(function (sum, currentVal) {
            return sum + currentVal;
        });
    }
}
/* 3)
   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
   Порядок элементов результирующего массива должен совпадать с порядком,
   в котором они встречаются в оригинальной структуре.
 */
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (uniqueArray, currentVal) {
        if (typeof currentVal !== 'object') {
            if (!~uniqueArray.indexOf(currentVal))
                uniqueArray.push(currentVal);
        }
        else {
            var isValueUnique = true;
            for (var i = 0, len = uniqueArray.length; i < len; i++) {
                if (typeof uniqueArray[i] === 'object' && JSON.stringify(uniqueArray[i]) === JSON.stringify(currentVal)) {
                    isValueUnique = false;
                }
            }
            if (isValueUnique)
                uniqueArray.push(currentVal);
        }
        return uniqueArray;
    }, []);
}
/*
 4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
*/
function toMatrix(vector, rowSize) {
    if (rowSize === void 0) { rowSize = 1; }
    var matrix = [];
    var rowForMatrix = [];
    for (var i = 0, len = vector.length, counter = 0; i < len; i++) {
        if (counter !== rowSize) {
            rowForMatrix.push(vector[i]);
            counter++;
        }
        else {
            matrix.push(rowForMatrix);
            rowForMatrix = [];
            rowForMatrix.push(vector[i]);
            counter = 1;
        }
    }
    if (rowForMatrix.length > 0)
        matrix.push(rowForMatrix);
    return matrix;
}
