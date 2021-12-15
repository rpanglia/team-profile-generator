// const { test } = require('picomatch');
// const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern('Steve', 149, 'stevee@gmail.com', 'Queens');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});