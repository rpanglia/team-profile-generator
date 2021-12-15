// const { test } = require('picomatch');
// const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
    const engineer = new Engineer('Steve', 149, 'stevee@gmail.com', 'StHub');
    
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});