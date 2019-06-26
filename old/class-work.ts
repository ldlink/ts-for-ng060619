// @Component()
// class Header {
//     @Input()
//     public value;
//
//     public constructor(
//         @Inject() http: HttpClient
//     ){}
//
//     @HostListener()
//     public click(event){
//
//     }
// }

function debounce(ms: number): MethodDecorator {
    let timeout: number | null;
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor): PropertyDescriptor {

        return {
            ...descriptor,
            value: (...args: unknown[]): void => {
                timeout ? clearTimeout(timeout) : null;
                timeout = setTimeout(() => {
                    console.log(`Call ${key.toString()}(${args.join()})`);
                    timeout = null;
                    descriptor.value(...args);
                }, ms);
            }
        };
    };
}

class MathLib {
    @debounce(5000)
    public areaOfCircle(r: number): void {
        const result: number = Math.PI * r ** 2;
        console.log(result);
    }
}

const lib: MathLib = new MathLib();
lib.areaOfCircle(2);
lib.areaOfCircle(3);
lib.areaOfCircle(10);
lib.areaOfCircle(16);
lib.areaOfCircle(22);
