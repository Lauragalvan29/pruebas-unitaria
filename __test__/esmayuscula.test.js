const isUpperCase = require('../utils/esmayuscula');

test('Comprobar mayuscula True', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('Comprobar mayuscula False', () => {
    expect(isUpperCase("hola")).toBe(false);
})

