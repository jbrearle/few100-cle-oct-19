export class Employee {
    constructor(public firstName: string, public lastName: string, private salary: number) { }

    giveRaise(amount: number) {
        this.salary += amount;
    }

    get currentSalary() {
        return this.salary;
    }
}
