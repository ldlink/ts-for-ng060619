function isInArray(arr: sn[], ...args: sn[]): boolean {
    return args.every((arg: sn) => arr.includes(arg));
}

function summator(...args: sn[]): number {
    return args.reduce((sum: number, arg: sn) => sum + (+arg || 0), 0);
}

function getUnique(...args: (sn|sn[])[]): sn[] {
    let flattened: sn[] = [];
    flattened = flattened.concat(...args);
    const set: Set<sn> = new Set(flattened);

    return Array.from(set);
}

function toMatrix(data: sn[], rowSize: number): sn[][] {
    const matrix: sn[][] = [];

    for (let i: number = 0; i < data.length && rowSize > 0; i += rowSize) {
        const row: sn[] = data.slice(i, i + rowSize);
        matrix.push(row);
    }

    return matrix;
}
