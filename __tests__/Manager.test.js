// const { test } = require('picomatch');
// const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('create manager object', () => {
    const manager = new Manager('Steve', 149, 'stevee@gmail.com', 14);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});