it("Si hacemos contarPalabras('javascript') debería retornar 1", function() {
let resultado = contarPalabras('javascript')
assert.equal(resultado, 1,`contarPalabras('javascript') debería retornar 1 pero fue ${resultado}`);
})

it("Si hacemos contarPalabras('ada lovelace') debería retornar 2", function() {
let resultado = contarPalabras('ada lovelace')
assert.equal(resultado, 2,`contarPalabras('ada lovelace') debería retornar 2 pero fue ${resultado}`);
})