import { GetUnique } from './task#03';

describe('task#01', () => {

  it('boolean correct', () => {
    const result: boolean[] = GetUnique(true, true, false, false);
    expect(result).toEqual([true, false]);
  });

  it('number correct', () => {
    const result: number[] = GetUnique(1, 2, 3, 4, 5, 6, 5, 4);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('string correct', () => {
    const result: string[] = GetUnique('Lorem', 'lorem', 'Ipsum', 'ipsum', 'dolor', 'sit', 'amet', 'ipsum', 'dolor');
    expect(result).toEqual(['Lorem', 'lorem', 'Ipsum', 'ipsum', 'dolor', 'sit', 'amet']);
  });

  it('object references correct', () => {
    const obj1: object = new Object();
    const obj2: object = 'str' as unknown as object;
    const obj3: object = [1, 2, 3] as object;

    const result: object[] = GetUnique(obj1, obj2, obj3, obj2, obj3);

    expect(result).toEqual([obj1, obj2, obj3]);
  });

  it('only one argument', () => {
    expect(GetUnique(1)).toEqual([1]);
  });

  it('argument is null', () => {
    expect(GetUnique(null as unknown)).toEqual([null]);
  });

  it('argument is undefined', () => {
    expect(GetUnique(undefined as unknown)).toEqual([undefined]);
  });

  it('argument is empty array', () => {
    expect(GetUnique(...new Array<number>())).toEqual([]);
  });
});
