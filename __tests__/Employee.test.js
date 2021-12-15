// const { test } = require('picomatch');
// const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee('Steve', 149, 'stevee@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});