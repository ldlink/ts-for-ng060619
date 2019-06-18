export function ToMatrix<T>(data: T[], rowSize: number): T[][] {
  if (rowSize <= 0) {
    throw new Error('invalid argument rowSize');
  }

  if (!data || data.length === 0) {
    throw new Error('invalid argument data');
  }

  const tmp: T[] = [...data];
  const result: T[][] = new Array<T[]>();

  for (; tmp.length > 0; ) {
    result.push(tmp.splice(0, rowSize));
  }

  return result;
}
