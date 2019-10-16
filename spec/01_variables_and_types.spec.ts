describe('variables in Typescript', () => {
    it('any typig', () => {
        let x;

        x = 'dog';

        x = 3.14;

        x = function (a, b) {
            return a + b;
        };
    });
    it('implicit typing', () => {
        const x = 'dog';

        // x = 3.14;
    });
    it('has union types', () => {
        let x: number | string;

        x = 'tacos';
    });

    it('const cannot be reassigned', () => {
        const Pi = 3.1415;
        // using const you have to declare it that moment and you cannot change it.
        const movie = {
            title: 'Rise of Skywalker',
            yearReleased: 2018
        };

        movie.yearReleased = 2019; // you can change the parameter on the object.

    });

    it('var is evil and you should not use it', () => {
        const age = 22;

        if (age > 21) {
            // tslint:disable-next-line: no-var-keyword
            var message = 'old enough!';
        }

        expect(message).toBe('old enough!');

    });
});

describe('types', () => {
    it('has numbers', () => {
        const asInt = 12;
        const asFloat = 12.333;
        const asEasyToRead = 135_233_802.42;
        const asHex = 0xff;
        const asBase8 = 0o33;
        const asBinary = 0b1010101;
    });
    describe('string literals', () => {
        it('uses single quotes', () => {
            const message = 'creating a string';

            // tslint:disable-next-line: quotemark
            expect(message).toBe('creating a string');
        });
        it('using verbatim strings', () => {
            const story = `My life story.
            you can use multiple lines when you
            use the back tick. `;
        });
        it('use them as template strings', () => {
            const name = 'Bob';
            const pay = 32_000.00;

            const message = `Employee ${name} makes {pay} per year`; // must use the back tick to pull this syntax off
            // const message 1 = 'Employee ' + name+ 'makes $' + pay + 'a year'; this is without back tick

            expect(message).toBe(message);
        });
    });

    describe('array literals', () => {
        it('declaring an array', () => {
            const things = [];

            const numbers: number[] = [];
            const aString: string[] = []; // declaring this array as a string.

            let aStringAndNumbers: (string | number)[]; // either of these can create an array that can hold a string or a number

            let aStringAndNumbers2: Array<string | number>;

        });
        it('usig typed arrays (tuples)', () => {
            const quoteMarkRule: [boolean, string] = [true, 'single'];

            // quotemarkRule[0] = 'tacos'; // will not work bc it needs to be a boolean
            // quoteMarkRule[1] = 99; // will not work bc we already assigned it to a string
        });
    });
    describe('enums and constants', () => {
        describe('enums', () => {
            it('has them', () => {
                // enum SeatType { window, ailse, middle }
                // let seatType: SeatType;
                // seatType = (function () {
                //     return SeatType.window;
                // })();
                // let price = 100;
                // switch (seatType) {
                //     case SeatType.window: {
                //         price += 50;
                //         break;
                //     }
                //     case SeatType.middle: {
                //         price -= 25;
                //         break;
                //     }
                //     case SeatType.ailse: {
                //         price += 10;
                //         break;
                //     }
                //     default: {
                //         // optional - but if it isn't one of those
                //     }
                // }
                // expect(price).toBe(150);

            });
        });
        describe('union constants', () => {
            it('has them, too', () => {
                // enum SeatType { window, ailse, middle }
                type SeatType = 'window' | 'aisle' | 'middle';

                let seatType: SeatType;
                seatType = (function () {
                    return 'window' as SeatType;
                })();
                let price = 100;
                switch (seatType) {
                    case 'window': {
                        price += 50;
                        break;
                    }
                    case 'middle': {
                        price -= 25;
                        break;
                    }
                    case 'aisle': {
                        price += 10;
                        break;
                    }
                    default: {
                        // optional - but if it isn't one of those
                    }
                }
                expect(price).toBe(150);
            });
        });
    });

    describe('Object literals', () => {
        it('has anonymous objects', () => {
            interface Movie {
                title: string;
                director: string;
                yearReleased: number;
                mainActor?: string; // this means that adding a main actor as a property is optional
            }
            const movie = {
                title: 'thor Ragnarok',
                director: 'some guy',
                yearReleased: 2016
            };
            expect(movie.title).toBe('thor Ragnarok');

            movie.yearReleased = 2015;
            expect(movie.yearReleased).toBe(2015);
        });
        it('duck typing', () => {
            // structural typing.
            interface IHaveAMessage { message: string; }
            function doIt(thingy: IHaveAMessage) {

                console.log(thingy.message);
            }

            doIt({ message: 'Hello!' });

            const phoneCall = {
                from: 'Mom',
                message: 'Call me, you slacker!'
            };

            doIt(phoneCall);
        });
    });

    describe('type assertions', () => {
        it('they are like type casts but they dont hdo anything but tell ythe compiler to calm down', () => {
            let x: any;

            x = (function () {
                return 'dog';
            })();

            // tslint:disable-next-line: no-angle-bracket-type-assertion
            // tslint:disable-next-line: whitespace
            const length: number = (x as string).length;

            const length2: number = (x as string).length;

            expect(length).toBe(3);

            interface ValueAndString { value: number; display: string; }

            const numbers = [100, 89];
            const result = numbers.map(num => {
                return {
                    value: num,
                    display: num.toString()
                } as ValueAndString;
            });

            expect(result[0].value).toBe(100);
            expect(result[0].display).toBe('100');
        });
    });
});
