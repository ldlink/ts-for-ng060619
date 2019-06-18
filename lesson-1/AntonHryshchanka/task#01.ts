import { IsInvalidArray } from './helpers';

export function IsInArray<T>(arr: T[], ...search: T[]): boolean {
  if (IsInvalidArray(arr) || IsInvalidArray(search)) {
    return false;
  }

  const a: Set<T> = new Set(arr);
  const b: Set<T> = new Set(search);
  const intersection: Set<T> = new Set([...a].filter((x: T) => b.has(x)));

  return intersection.size === b.size;
}
