it("Si hacemos capitalizar('café') debería retornar 'Café'", function() {
let resultado = capitalizar('café')
assert.equal(resultado, 'Café',`capitalizar('café') debería retornar 'Café' pero fue ${resultado}`);
})

it("Si hacemos capitalizar('tereshkova') debería retornar 'Tereshkova'", function() {
let resultado = capitalizar('tereshkova')
assert.equal(resultado, 'Tereshkova',`capitalizar('tereshkova') debería retornar 'Tereshkova' pero fue ${resultado}`);
})