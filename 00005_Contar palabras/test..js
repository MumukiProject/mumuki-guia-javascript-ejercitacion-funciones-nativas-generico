it("Si hacemos contarPalabras('javascript') debería retornar 1", function() {
let resultado = contarPalabras('javascript')
assert.equal(resultado, 1,`contarPalabras('javascript') debería retornar 1 pero fue ${resultado}`);
})

it("Si hacemos contarPalabras('América Latina') debería retornar 2", function() {
let resultado = contarPalabras('América Latina')
assert.equal(resultado, 2,`contarPalabras('América Latina') debería retornar 2 pero fue ${resultado}`);
})