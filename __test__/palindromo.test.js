const palindromo = require('../utils/palindromo');

test('Comprobar reverse 1', () => {
    expect(palindromo("hola")).toBe("aloh");
})

test('Comprobar reverse 2', () => {
    expect(palindromo("hola mundo")).toBe("odnum aloh");
})