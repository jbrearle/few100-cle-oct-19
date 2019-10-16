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
    });
});
