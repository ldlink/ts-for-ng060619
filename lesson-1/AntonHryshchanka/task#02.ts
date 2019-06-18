import { IsInvalidArray } from './helpers';

type argument = string | number;

export function Summator(...args: argument[]): argument {
  if (IsInvalidArray(args)) {
    throw Error('invalid argument');
  }

  switch (typeof args[0]) {
      case 'string': return _summaterstr(args as string[]);
      case 'number': return _summaternum(args as number[]);
  }
}

function _summaterstr(args: string[]): string {
  return args.reduce((accomulator: string, current: string) => accomulator + current);
}

function _summaternum(args: number[]): number {
  return args.reduce((accomulator: number, current: number) => accomulator + current);
}
