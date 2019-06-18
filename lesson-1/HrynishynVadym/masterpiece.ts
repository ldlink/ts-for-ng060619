/* 1)
   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
   Возвращает true, если все аргументы, кроме первого входят в первый.
   Первым всегда должен быть массив.
*/
function isInArray(arr: any[], ...rest: any[]): boolean {
    console.log(`Array: ${arr},\n Arguments: ${rest}`);
    
    for (let i: number = 0, len: number = rest.length; i < len; i++) {
        if (typeof rest[i] !== 'object') {
            if (!~arr.indexOf(rest[i])) return false;
        } else {
            let isThereSuchAnObject: boolean = false;

            for (let i: number = 0, len: number = arr.length; i < len; i++) {
                if (typeof arr[i] === 'object' && JSON.stringify(arr[i]) === JSON.stringify(rest[i])) {
                    isThereSuchAnObject = true;
                }
            }

            if (!isThereSuchAnObject) return false;
        }
    }

    return true;
}


/* 2)
   Написать функцию summator(), которая суммирует переданые ей аргументы.
   Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
*/
function summator(...args: number[]): number;
function summator(...args: string[]): string;
function summator(...args: (string | number)[]) {
    if (typeof args[0] === 'number') {
        return args.reduce((sum: number, currentVal: number) => {
            return sum + currentVal;
        });
    } else if (typeof args[0] === 'string') {
        return args.reduce((sum: string, currentVal: string) => {
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
function getUnique(...args: any[]): any[] {
    return args.reduce((uniqueArray, currentVal) => {
        if (typeof currentVal !== 'object') {
            if (!~uniqueArray.indexOf(currentVal)) uniqueArray.push(currentVal); 
        } else {
            let isValueUnique: boolean = true;

            for (let i: number = 0, len: number = uniqueArray.length; i < len; i++) {
                if (typeof uniqueArray[i] === 'object' && JSON.stringify(uniqueArray[i]) === JSON.stringify(currentVal)) {
                    isValueUnique = false;
                }
            }

            if (isValueUnique) uniqueArray.push(currentVal);
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
function toMatrix<T>(vector: Array<T>, rowSize: number = 1): Array<Array<T>> {
    const matrix: Array<Array<T>> = [];
    let rowForMatrix: Array<T> = [];

    for (let i: number = 0, len = vector.length, counter: number = 0; i < len; i++) {
        if (counter !== rowSize) {
            rowForMatrix.push(vector[i]);
            counter++;
        } else {
            matrix.push(rowForMatrix);
            rowForMatrix = [];
            rowForMatrix.push(vector[i]);
            counter = 1;
        }
    }

    if (rowForMatrix.length > 0) matrix.push(rowForMatrix);

    return matrix;
}
