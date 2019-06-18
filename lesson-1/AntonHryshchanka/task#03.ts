export function GetUnique<T>(...arr: T[]): T[] {
    const result: Set<T> = new Set(arr);
    return [...result];
}
