it("Si hacemos esPuenteSeguro('########') debería retornar true", function() {
let resultado = esPuenteSeguro('########')
assert.equal(resultado, true,`esPuenteSeguro('########') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esPuenteSeguro('### ##') debería retornar false", function() {
let resultado = esPuenteSeguro('### ##')
assert.equal(resultado, false,`esPuenteSeguro('### ##') debería retornar false pero fue ${resultado}`);
})