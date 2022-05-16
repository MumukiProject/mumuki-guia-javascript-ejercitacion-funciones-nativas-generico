it("Si hacemos esFraccionMayorAUno('1/2') debería retornar false", function() {
let resultado = esFraccionMayorAUno('1/2')
assert.equal(resultado, false,`esFraccionMayorAUno('1/2') debería retornar false pero fue ${resultado}`);
})

it("Si hacemos esFraccionMayorAUno('2/2') debería retornar false", function() {
let resultado = esFraccionMayorAUno('2/2')
assert.equal(resultado, false,`esFraccionMayorAUno('2/2') debería retornar false pero fue ${resultado}`);
})

it("Si hacemos esFraccionMayorAUno('4/2') debería retornar true", function() {
let resultado = esFraccionMayorAUno('4/2')
assert.equal(resultado, true,`esFraccionMayorAUno('4/2') debería retornar true pero fue ${resultado}`);
})


