import { isEven, doubleIt } from './utils';

describe('functions', () => {
    it('how to declare them', () => {
        // two ways

        // 1. name functions

        function add(a: number, b: number): number {
            return a + b;
        }

        expect(add(2, 2)).toBe(4);

        // 2. anonymous function

        // anonymous function with the funciton keyword
        // tslint:disable-next-line: only-arrow-functions
        const subtract = function (a: number, b: number) {
            return a - b;
        };
        expect(subtract(4, 2)).toBe(2);

        const multiply = (a: number, b: number) => a * b;
        expect(multiply(3, 3)).toBe(9);
    });

    it('arrow functions', () => {
        const formatName = (first: string, last: string) => {
            if (last.length > 10) { }
            return `${last}, ${first}`;
        };
        expect(formatName('Han', 'Solo')).toBe('Solo', 'Han');
        expect(() => formatName('Luke', 'Skywalkerrrrrr')).toThrowError();
    });
    describe('paramaters to functions', () => {
        it('an example - overloading', () => {
            function nameFormatter(first: string, last: string, mi?: string) {
                let fullName = `${last}, ${first}`;
                if (mi) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(nameFormatter('Han', 'Solo')).toBe('Solo, Han');
            expect(nameFormatter('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        it('default values for parameters', () => {

            function add(a: number = 10, b: number = 15) {
                return a + b;
            }
            expect(add()).toBe(25);
            expect(add(15)).toBe(30);
        });
        it('rest arguements', () => {
            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((x, y) => x + y, firstTwo);

            }
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
    });
    describe('higher order functions', () => {
        it('an example of a function that takes a function', () => {

            function identity(n: string) { return n; }

            type StringModifer = (msg: string) => string;
            function printItOut(message: string, fn: StringModifer = identity): void {
                console.log(`At ${new Date().toISOString()}:`, fn(message));
            }

            printItOut('Tacos!', (n) => n.toUpperCase());
            printItOut('Tacos2', (n) => '***' + n + '***');
            printItOut('Tortilla!');
            printItOut('HOF Rawk!', makeUpper);

            function makeUpper(x: string) {
                return x.toUpperCase();
            }
        });
        it('not a HOF, doing it a "sane" way', () => {
            // <element>content</element>
            // <h1>Hello</h1>

            function tagMaker(element: string, content: string) {
                return `<${element}>${content}</${element}>`;
            }

            expect(tagMaker('h1', 'Tacos')).toBe('<h1>Tacos</h1>');
            expect(tagMaker('h1', 'Chips')).toBe('<h1>Chips</h1>');
            expect(tagMaker('h1', 'Salsa')).toBe('<h1>Salsa</h1>');
            expect(tagMaker('p', 'coolio')).toBe('<p>coolio</p>');
        });
        it('using an object', () => {


            class TagMaker {

                private element: string;
                constructor(element: string) {
                    this.element = element;
                }

                make(content: string) {
                    return `<${this.element}>${content}</${this.element}>`;
                }
            }

            const h1Maker = new TagMaker('h1');
            expect(h1Maker.make('Tacos')).toBe('<h1>Tacos</h1>');
            expect(h1Maker.make('Chips')).toBe('<h1>Chips</h1>');

            const pMaker = new TagMaker('p');
            expect(pMaker.make('coolio')).toBe('<p>coolio</p>');
        });
        it('with a higher order function', () => {

            function tagMaker(element: string): (content: string) => string {
                return (content) => `<${element}>${content}</${element}>`;
            }

            const h1Maker = tagMaker('h1');

            expect(h1Maker('Tacos')).toBe('<h1>Tacos</h1>');
            expect(h1Maker('Chips')).toBe('<h1>Chips</h1>');
            const pMaker = tagMaker('p');
            expect(pMaker('coolio')).toBe('<p>coolio</p>');

            expect(tagMaker('h2')('kidding me?')).toBe('<h2>kidding me?</h2>');
        });


    });
    describe('array methods', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        it('visiting each element in an array', () => {
            numbers.forEach((e, i, c) => console.log({ e, i, c }));
        });
        describe('methods that create a new array', () => {
            it('map', () => {
                const doubled = numbers.map(n => n * 2);
                expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            });
            it('filter', () => {
                const evens = numbers.filter(isEven);
                expect(evens).toEqual([2, 4, 6, 8]);
            });
        });
        describe('methods that return a single value', () => {
            describe('checking the membership', () => {
                it('seeign if all themember meet criteria', () => {
                    const allEven = numbers.every(isEven);
                    expect(allEven).toBe(false); // some are odd

                    const someEven = numbers.some(isEven);
                    expect(someEven).toBe(true); // yes some are even
                });

                it('has reduce', () => {
                    const total = numbers.reduce((s, n) => s + n);
                    expect(total).toBe(45);

                    const total2 = numbers.reduce((s, n) => s + n, 100);
                    expect(total2).toBe(145);

                    const totalOfDoubledEvens = numbers
                        .filter(isEven)
                        .map(doubleIt)
                        .reduce((s, n) => s + n);

                    expect(totalOfDoubledEvens).toBe(40);


                });
                it('practice', () => {
                    interface CartItem {
                        name: string;
                        qty: number;
                        price: number;
                    }

                    const cart: CartItem[] = [
                        { name: 'Eggs', qty: 1, price: 2.99 },
                        { name: 'Bread', qty: 3, price: 3.50 },
                        { name: 'Shampoo', qty: 2, price: 7.25 }
                    ];

                    interface ShippingInfo {
                        totalQty: number;
                        totalPrice: number;
                    }

                    // how would we use reduce to get the shipping info from
                    // this cart. (the total number of things, the total price.)

                    const initialState: ShippingInfo = {
                        totalQty: 0,
                        totalPrice: 0
                    };

                    const answer = cart.reduce((s: ShippingInfo, n: CartItem): ShippingInfo => {
                        return {
                            totalQty: s.totalQty + n.qty,
                            totalPrice: s.totalPrice + (n.qty * n.price)
                        } as ShippingInfo;
                    }, initialState);
                });
            });

        });
    });
});

