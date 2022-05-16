it("Si hacemos tienenMismaLongitud('javascript', 'java') debería retornar false", function() {
let resultado = tienenMismaLongitud('javascript', 'java')
assert.equal(resultado, false,`tienenMismaLongitud ('javascript','java' debería retornar false pero fue ${resultado}`);
})

it("Si hacemos tienenMismaLongitud('manzana', 'cerveza') debería retornar true", function() {
let resultado = tienenMismaLongitud('manzana', 'cerveza')
assert.equal(resultado, true,`tienenMismaLongitud ('manzana','cerveza' debería retornar true pero fue ${resultado}`);
})