it("Si hacemos capitalizar('lovelace') debería retornar 'Lovelace'", function() {
let resultado = capitalizar('lovelace')
assert.equal(resultado, 'Lovelace',`capitalizar('lovelace') debería retornar 'Lovelace' pero fue ${resultado}`);
})

it("Si hacemos capitalizar('tereshkova') debería retornar 'Tereshkova'", function() {
let resultado = capitalizar('tereshkova')
assert.equal(resultado, 'Tereshkova',`capitalizar('tereshkova') debería retornar 'Tereshkova' pero fue ${resultado}`);
})