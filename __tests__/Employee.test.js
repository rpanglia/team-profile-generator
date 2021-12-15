const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee('Steve');

    expect(employee.name).toBe('Steve');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});