type numOrStr = number | string;
type simple = numOrStr | boolean;

/*  1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив. */
function isInArray(array: simple[], ...args: simple[]): boolean {
  if (!args || args.length < 2) { return false; }
  let result: boolean = true;

  args.forEach(function (item: simple, index: number): void {
      if (index > 0 && array.indexOf(item) === -1) {
          result = false;
      }
  });
  return result;
}

/* 2) Написать функцию summator(), которая суммирует переданые ей аргументы.
   Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено */
function summator(...args: simple[]): number {
    let result: number = 0;
    args.forEach(function (item: simple): void {
        result += Number(item);
    });
    return result;
}

/* 3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре. */
function getUnique(arr: simple[]): simple[] {
    return arr.reduce(function(result: simple[], currentValue: simple): simple[]  {
        if (result.indexOf(currentValue) === -1) {
            return [...result, currentValue];
        }
        return result;
    }, []);
}

/* 4) Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
возвращает новый массив. Число показывает количество элементов в подмассивах,
элементы подмассивов беруться из массива data.
Оригинальный массив не должен быть изменен. */
function toMatrix(data: numOrStr[], rowSize: number): numOrStr[][] {
    let newArr: numOrStr[][] = [];
    data.forEach(function (item: numOrStr, index: number): void {
        newArr[index] = data.slice(0, rowSize);
        newArr[index].length = rowSize;
    });
    return newArr;
}

function hwTest1(): void {
  const arr: simple[] = [4, 6, 'jjj', false, 555];
  console.log( '1-f', isInArray(arr, 4, 5) );
  console.log( '2-f', isInArray(arr) );
  console.log( '3-f', isInArray(arr, 4, 0) );
  console.log( '4-t', isInArray(arr, 4, 555) );
}

function hwTest2(): void {
    console.log( '1-(14)', summator(5, 4, 5) );
    console.log( '2-(14)', summator(5, '4', 5) );
    console.log( '3-(14)', summator('', '4', 10) );
    console.log( '4-(14)', summator('1', '1', 1, 1, 1, 2, 2, 2, 3) );
    console.log( '5-(10)', summator(5, 15, -10) );
}

function hwTest3(): void {
    console.log( '1.', getUnique([5, 4, 5]) );
    console.log( '2.', getUnique([5, '4', 5]) );
    console.log( '3.', getUnique(['', '4', 10]) );
    console.log( '4.', getUnique(['1', '1', 1, 1, 1, 2, 2, 2, 3]) );
    console.log( '5.', getUnique([5, 15, -10]) );
}

function hwTest4() {
    console.log( '1.', toMatrix([1, 2, 3], 8 ));
    console.log( '2.', toMatrix(['1', '1', 1, 1, 1, 2, 2, 2, 3], 4) );
}

hwTest4();