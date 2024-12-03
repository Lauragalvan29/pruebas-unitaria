const isUpperCase = require('../utils/esmayuscula');

test('Comprobar mayuscula True', () => {
    expect(isUpperCase("HOLA")).toBe(true);
})

test('Comprobar mayuscula False', () => {
    expect(isUpperCase("hola")).toBe(false);
})

describe('esmayuscula', () => {
  test.each`
    firstValue     | expectedResult    
    ${"adios"}     | ${false}
    ${"BOTA"}      | ${true}
    ${"que"}       | ${false}
  `('comprobar palindromo', ({firstValue, expectedResult}) => {
    expect(isUpperCase(firstValue)).toBe(expectedResult);
  });
})