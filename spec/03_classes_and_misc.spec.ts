import { Employee } from './hr/employee';
import { Department } from './hr/department';

describe('classes', () => {
    it('using a class', () => {
        const bob = new Employee('Bob', 'Smith', 82000);
        expect(bob.firstName).toBe('Bob');
        expect(bob.currentSalary).toBe(82000);

        bob.giveRaise(100000);

        expect(bob.currentSalary).toBe(182000);

        const dev = new Department();
        dev.name = 'Developers';
        dev.manager = bob;
    });
});
