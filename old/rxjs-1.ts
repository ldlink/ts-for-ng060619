// ReactiveX = iterator +  Observer
import { EMPTY, empty, fromEvent, interval, Observable, of, zip } from 'rxjs';
import {
    catchError, delay,
    filter,
    map,
    mergeAll,
    mergeMap,
    retry,
    retryWhen,
    skip,
    switchAll,
    switchMap,
    take
} from "rxjs/operators";

// let count: number = 0;

// const sequence$: Observable<number> = new Observable((subscriber: Subscriber<number>) => {
//     console.log('count start');
//     const interval: number = setInterval(() => {
//         subscriber.next(count++);
//         // if (count === 5) {
//         //     clearInterval(interval);
//         //     subscriber.complete()
//         // }
//     }, 1000);
// });

// const sequence$: Observable<number> = fromEvent(document, 'click')
//     .pipe(
//         map((event: Event) => (event as MouseEvent).clientX),
//         filter((x: number) => x < 500)
//     );
//
// sequence$
//     .subscribe((x: number) => {
//             console.log('Sub 1', x);
//         }
//     );
//
// setTimeout(() => {
//     sequence$.subscribe((x: number) => {
//             console.log('Sub 2', x);
//         }
//     );
// }, 5000)

//
// const sequence1$: Observable<number> = interval(1000);
// /*
//    --0--1--2--3--
//      tap(x => x*2)
//    --0--1--2--3--
//      map(x => x*2)
//    --0--2--4--6--
//      take(3)
//    --0--2--4|
//      skip(2)
//    --------4|
//  */
//
// const sequence2$: Observable<number> = sequence1$.pipe(
//     tap((x: number) => x * 2),
//     map((x: number) => x * 2),
//     take(3),
//     skip(2)
// );
//
// sequence2$.subscribe((v: number) => console.log(v), () => {
// }, () => {
//     console.log('complete');
// });


// class UserService {
//
//     public constructor(
//         private readonly http: HttpClient
//     ){}
//
//     public getUser(): Observable<any> {
//         return  this.http.get('http//.....')
//     }
// }
//
// class MyComponent {
//     public constructor(
//         private readonly userService: UserService
//     ){}
//
//     ngOnInit(){
//         this.userService.getUser().subscribe()
//     }
//
//     showView() {
//         this.userService.getUser().subscribe()
//     }
// }

// const touchStart$: Observable<number> = getX(fromEvent(document, 'touchstart') as Observable<TouchEvent>);
// const touchEnd$: Observable<number> = getX(fromEvent(document, 'touchend') as Observable<TouchEvent>);
//
//
// function getX(source$: Observable<TouchEvent>): Observable<number> {
//     return source$
//         .pipe(
//             map(({changedTouches}: TouchEvent) => changedTouches[0].clientX)
//         );
// }
//
// function swipe(source$: Observable<[number, number]>): Observable<number> {
//     return source$.pipe(
//         map(([startX, endX]: [number, number]) => {
//             return startX - endX;
//         })
//     );
// }
//
// const swipe$: Observable<number> = swipe(zip(touchStart$, touchEnd$));
//
// swipe$.subscribe((direction: number) => {
//     if (direction > 0) {
//         console.log('Swipe left');
//         return;
//     }
//     console.log('Swipe right');
// })


// const sequence1$: Observable<number> = interval(1000).pipe(take(4));
//
// const sequence2$: Observable<number> = sequence1$.pipe(
//     // mergeMap(() => of(1, 2))
//     switchMap(() => of(1, 2)),
// );
// // mergeMap = map + mergeAll
// // switchMap = map + switchAll
//
// sequence2$.subscribe((v: number) => {
//     console.log(v);
// });

// const sequence$: Observable<Event> = fromEvent(document, 'click');
//
// function request(): Promise<any> {
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//         .then((res: Response) => res.json());
// }
//
// const sequence2$: Observable<any> = sequence$
//     .pipe(
//         switchMap(() => request())
//     );
//
// sequence2$.subscribe((value => console.log(value.email)));

const sequence1$: Observable<number> = interval(500);

const sequence2$: Observable<any> = of('1', '2', '3', 4, '5', '6', '7');

zip(sequence1$, sequence2$)
    .pipe(
        switchMap(([_x, y]) => {
            return of(null)
                .pipe(
                    map(() => {
                            return y.toUpperCase();
                        }
                    ),
                    // retryWhen((obs) => obs.pipe(delay(5000)))
                    catchError((err, obs) => {
                        return EMPTY;
                    })
                );
        })
    )
    .subscribe((x) => {
            console.log('Val => ', x);
        },
        (err) => {
            console.log('Err =>', err);
        },
        () => {
            console.log('complete');
        }
    )
