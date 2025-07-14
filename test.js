// Importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});
test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    // const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 0.0069 JPY", function() {
    // Importo la funcion desde app.js
    //const { fromDollartoYen } = require('./app.js');

    // Uso la función como debe ser usada
    const yenes = fromDollarToYen(3.5);

    // Si 1 dollar son 0.0069 JPY, entonces 3.5 dollares debe ser (3.5 * 145)
    const expected = 3.5 * 0.0069;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(3.5)).toBe(expected); // 1 dollar son 0.0069 JPY, entonces 3.5 euros deberían ser = (3.5 * 145)
})
test("One yen should be 0.0050 pound", function() {
    // Importo la funcion desde app.js
    //const { fromYentoPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(3.5);

    // Si 1 yen son 198.28 pounds, entonces 3.5 yenes debe ser (3.5 * 198.28)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(3.5)).toBe(693.98); // 1 yen son 198.28 pounds, entonces 3.5 yenes deberían ser = (3.5 * 198.28)
})