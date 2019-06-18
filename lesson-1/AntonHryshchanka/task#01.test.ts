import { IsInArray } from './task#01';

describe('task#01', () => {

  it('boolean equals', () => {
    const arr: boolean[]  = [ true, true, false, false ];
    const result: boolean = IsInArray(arr, true, false);
    expect(result).toBeTruthy();
  });

  it('boolean not equals', () => {
    const arr: boolean[]  = [ true, true ];
    const result: boolean = IsInArray(arr, false);
    expect(result).toBeFalsy();
  });

  it('number not equals', () => {
    const arr: number[]  = [ 1, 2, 3, 4, 5 ];
    const result: boolean = IsInArray(arr, 6, 5, 4);
    expect(result).toBeFalsy();
  });

  it('string equals', () => {
    const arr: string[]  = [ 'Lorem', 'ipsum', 'dolor', 'sit', 'amet' ];
    const result: boolean = IsInArray(arr, 'Lorem', 'ipsum', 'amet');
    expect(result).toBeTruthy();
  });

  it('string not equals', () => {
    const arr: string[]  = [ 'ipsum', 'dolor', 'sit', 'amet' ];
    const result: boolean = IsInArray(arr, 'Lorem', 'ipsum', 'amet');
    expect(result).toBeFalsy();
  });

  it('object references equals', () => {
    const obj1: object = new Object();
    const obj2: object = 'str' as unknown as object;
    const obj3: object = [1, 2, 3] as object;

    const arr: object[]  = [ obj1, obj2, obj3 ];
    const result: boolean = IsInArray(arr, obj2, obj3);

    expect(result).toBeTruthy();
  });

  it('object references equals', () => {
    const obj1: object = new Object();
    const obj2: object = 'str' as unknown as object;
    const obj3: object = [1, 2, 3] as object;

    const arr: object[]  = [ obj1, obj2 ];
    const result: boolean = IsInArray(arr, obj2, obj3);

    expect(result).toBeFalsy();
  });

  it('only one argument', () => {
    expect(IsInArray([1, 2, 3])).toBeFalsy();
  });

  it('first argument is null', () => {
    expect(IsInArray(null as unknown as number[], 1, 2, 3)).toBeFalsy();
  });

  it('first argument is undefined', () => {
    expect(IsInArray(undefined as unknown as number[], 1, 2, 3)).toBeFalsy();
  });

  it('first argument is empty array', () => {
    expect(IsInArray(new Array<number>(), 1, 2, 3)).toBeFalsy();
  });

  it('second argument is null', () => {
    expect(IsInArray([1, 2, 3], null)).toBeFalsy();
  });

  it('second argument is undefined', () => {
    expect(IsInArray([1, 2, 3], undefined)).toBeFalsy();
  });

  it('second argument is empty array', () => {
    expect(IsInArray([1, 2, 3], ...new Array<number>())).toBeFalsy();
  });
});
