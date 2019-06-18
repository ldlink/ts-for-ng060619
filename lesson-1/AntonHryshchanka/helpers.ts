export function IsValidArray<T>(arg: T[]): boolean {
  if (!arg || arg.length === 0) {
    return false;
  }
  if (arg.length === 1 && (arg[0] === null || arg[0] === undefined)) {
    return false;
  }

  return true;
}

export function IsInvalidArray<T>(arg: T[]): boolean {
  return !IsValidArray(arg);
}
