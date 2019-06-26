"use strict";
// let num: number = NaN;
// let str: string = 'str';
// let bool: boolean = true;
// let und: undefined = undefined;
// let nill: null = null;
// let symbol: symbol = Symbol();
// let bigInt: bigint = 400n;
//
// type MyAccount = {
//     readonly firstName: string;
//     readonly age?: number;
//     getName?(): {};
// };
//
// //
// const account: MyAccount = {
//     firstName: 'Igor'
// };
//
// let user: typeof account; 
// //
// // account.age = 25;
// //
// // let hashMap: { [info: string]: typeof account } = {
// //     user1: account
// // }
//
// let arr: Array<MyAccount> = [account];
//
// arr.reverse()
// type MyAccount = {
//     readonly firstName: string;
//     readonly age?: number;
//     getName?(): {};
// };
//
// interface IName {
//     readonly firstName: string;
// }
//
// interface IAge {
//     readonly age?: number;
// }
//
// interface IAccount<Name, ID = string> extends IName, IAge {
//     id: ID;
//     getName(): Name;
// }
//
// let admin: IAccount<{name: string, surname: string}>;
// let user2:  IAccount<string>;
//
// class User implements IAccount {
//     public readonly firstName!: string;
//     public readonly age!: number;
// }
//
// let anyType: void = undefined;
//
// function fn(): void {
//
// }
// function average(...arg: sn []): string {
//     const avg: number = 100 / 3;
//     return `Average is ${avg}`;
// }
//
// average(1);
// average(1, 2, '3');
// average(1, 2, 3);
//
// let str: number = average(1, 2, 3);
// class BasePoint {
//     public constructor(
//         public readonly x: number,
//         protected y: number,
//         private z: number
//     ) {
//     }
//
//     public sum(): number {
//         return 30;
//     }
//
// }
//
// class Point extends BasePoint {
//     public constructor(
//         x: number,
//         y: number,
//         z: number
//     ) {
//         super(x, y, z);
//     }
//
//     public sum(): number {
//         console.log('Hi all');
//         return super.sum();
//     }
// }
//
// class Singleton {
//     private static instance: Singleton;
//
//     private constructor() {
//     }
//
//     public static getInstance(): Singleton {
//         if (!Singleton.instance) {
//             Singleton.instance = new Singleton();
//         }
//         return Singleton.instance;
//     }
// }
//
// let ins: Singleton = Singleton.getInstance();
// abstract class AbstractInput {
//     public onFocus(): void {
//
//     }
//
//     public onBlur(): void {
//
//     }
//
//     public abstract getValue(): string;
// }
//
// class CustomInput extends AbstractInput {
//     public getValue(): string {
//         return 'input';
//     }
// }
console.log('TypeScript is Awesome !!!');
