it("Si hacemos esAnioNuevo('03/05/2015') debería retornar false", function() {
let resultado = esAnioNuevo('03/05/2015')
assert.equal(resultado, false,`esAnioNuevo('03/05/2015') debería retornar false pero fue ${resultado}`);
})

it("Si hacemos esAnioNuevo('22/01/1987') debería retornar false", function() {
let resultado = esAnioNuevo('22/01/1987')
assert.equal(resultado, false,`esAnioNuevo('22/01/1987') debería retornar false pero fue ${resultado}`);
})

it("Si hacemos esAnioNuevo('01/01/2020') debería retornar true", function() {
let resultado = esAnioNuevo('01/01/2020')
assert.equal(resultado, true,`esAnioNuevo('01/01/2020') debería retornar true pero fue ${resultado}`);
})