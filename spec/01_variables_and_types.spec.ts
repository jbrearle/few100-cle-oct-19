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

