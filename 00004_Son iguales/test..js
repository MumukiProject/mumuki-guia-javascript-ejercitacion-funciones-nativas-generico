it("Si hacemos sonIguales('javascript', 'JavaScript') debería retornar true", function() {
let resultado = sonIguales('javascript', 'JavaScript')
assert.equal(resultado, true,`sonIguales('javascript', 'JavaScript') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos sonIguales('FeLi PeREZ', 'feli perez') debería retornar true", function() {
let resultado = sonIguales('FeLi PeREZ', 'feli perez')
assert.equal(resultado, true,`sonIguales('FeLi PeREZ', 'feli perez') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') debería retornar false", function() {
let resultado = sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')
assert.equal(resultado, false,`sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO') debería retornar false pero fue ${resultado}`);
})

