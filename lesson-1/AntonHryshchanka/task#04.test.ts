import { ToMatrix } from './task#04';

describe('task#01', () => {

  it('boolean correct', () => {
    const result: boolean[][] = ToMatrix([true, true, false, false, true], 2);
    expect(result).toEqual([[true, true], [false, false], [true]]);
  });

  it('number correct', () => {
    const result: number[][] = ToMatrix([1, 2, 3, 4, 5, 6, 5, 4], 4);
    expect(result).toEqual([[1, 2, 3, 4], [5, 6, 5, 4]]);
  });

  it('object references correct', () => {
    const obj1: object = new Object();
    const obj2: object = 'str' as unknown as object;
    const obj3: object = [1, 2, 3] as object;

    const result: object[] = ToMatrix([obj1, obj2, obj3], 1);

    expect(result).toEqual([[obj1], [obj2], [obj3]]);
  });

  it('data argument is empty', () => {
    expect(() => ToMatrix([], 5)).toThrow(new Error('invalid argument data'));
  });

  it('data argument is null', () => {
    expect(() =>ToMatrix(null as unknown as string[], 2)).toThrow(new Error('invalid argument data'));
  });

  it('data argument is undefined', () => {
    expect(() => ToMatrix(undefined as unknown as string[], 2)).toThrow(new Error('invalid argument data'));
  });

  it('row size is 0', () => {
    expect(() => ToMatrix([1, 3, 5], 0)).toThrow(new Error('invalid argument rowSize'));
  });

  it('row size is -1', () => {
    expect(() => ToMatrix([1, 3, 5], -1)).toThrow(new Error('invalid argument rowSize'));
  });

  it('source without changes', () => {
    const data: number[] = [1, 3, 5, 7, 9, 11];
    ToMatrix(data, 2);

    expect(data).toEqual([1, 3, 5, 7, 9, 11]);
  });
});
