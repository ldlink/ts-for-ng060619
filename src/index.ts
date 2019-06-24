// Observable + Subscriber  = Subject 

import {
    AsyncSubject,
    BehaviorSubject,
    ConnectableObservable, interval,
    Observable,
    ReplaySubject,
    Subject,
    Subscription
} from 'rxjs';
import { map, multicast, publish, refCount, share, take, tap } from 'rxjs/operators';

// const sequence$$: ReplaySubject<number> = new ReplaySubject<number>();
// // const sub1: Subscription = sequence$$
// //     .pipe(
// //         map((x: number) => x ** 2)
// //     )
// //     .subscribe((value: number) => {
// //         console.log(value);
// //     });
// // sub1.unsubscribe();
//
// sequence$$.next(1);
// sequence$$.next(2);
// sequence$$.next(3);
//
// sequence$$
//     .pipe(
//         map((x: number) => x ** 2)
//     )
//     .subscribe((value: number) => {
//         console.log(value);
//     }, () => {
//     }, () => {
//         console.log('complete');
//     });
//
// sequence$$.next(4);

// setTimeout(() => {
//     sequence$$.complete();
// }, 5000);
//
// setTimeout(() => {
//     sequence$$
//         .pipe(
//             map((x: number) => x ** 2)
//         )
//         .subscribe((value: number) => {
//             console.log(value);
//         }, () => {
//         }, () => {
//             console.log('complete');
//         });
// }, 8000);

// class ControlSequenceService {
//     private sequence$$: Subject<number> = new Subject();
//
//     public getDate(): Observable<number> {
//         return this.sequence$$.asObservable();
//     }
//
//     public setData(data: number): void {
//         this.sequence$$.next(data);
//     }
//
// }
//
// const service: ControlSequenceService = new ControlSequenceService();
// service.getDate().next()
// service.setData(1);

// multicast + Subject => publish
// publish + refCount => share

const connectableObservable$: Observable<number> = interval(1000)
    .pipe(
        tap((x: number) => console.log('tap =>', x)),
        share()
    );


const sub1: Subscription = connectableObservable$.subscribe((v: number) => {
    console.log('Sub 1 ==>', v);
});
let sub2: Subscription;
setTimeout(() => {
    sub2 = connectableObservable$.subscribe((v: number) => {
        console.log('Sub 2 ==>', v);
    });
}, 5000)
setTimeout(() => {
    sub1.unsubscribe();
    sub2.unsubscribe();
}, 8000)

setTimeout(() => {
    connectableObservable$.subscribe((v: number) => {
        console.log('Sub 3 ==>', v);
    });
}, 11000)

