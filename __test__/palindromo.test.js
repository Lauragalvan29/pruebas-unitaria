const palindromo = require('../utils/palindromo');

test('Comprobar reverse 1', () => {
    expect(palindromo("hola")).toBe("aloh");
})

test('Comprobar reverse 2', () => {
    expect(palindromo("hola mundo")).toBe("odnum aloh");
})

describe('palindromo', () => {
    test.each`
      firstValue     | expectedResult    
      ${"hola"}      | ${"aloh"}
      ${"casa"}      | ${"asac"}
      ${"cosa"}      | ${"asoc"}
    `('comprobar palindromo', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  })