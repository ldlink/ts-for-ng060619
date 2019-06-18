import { Summator } from './task#02';

describe('task#02', () => {
  it('numbers executed correct', () => {
    const result: string | number = Summator(1, 0, -1);
    expect(result).toBe(0);
  });

  it('string executed correct', () => {
    const result: string | number = Summator('str_1', 'str_2', 'str_3');
    expect(result).toBe('str_1str_2str_3');
  });

  it('null as argument', () => {
    expect(() => Summator(null as unknown as string)).toThrow(new Error('invalid argument'));
  });

  it('undefined as argument', () => {
    expect(() => Summator(undefined as unknown as string)).toThrow(new Error('invalid argument'));
  });
});
