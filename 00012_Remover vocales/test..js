it("Si hacemos removerVocales('javascript') debería retornar 'jvscrpt'", function() {
let resultado = removerVocales('javascript')
assert.equal(resultado, 'jvscrpt',`removerVocales('javascript') debería retornar 'jvscrpt' pero fue ${resultado}`);
})

it("Si hacemos removerVocales('estudiando programación') debería retornar 'stdnd prgrmcn'", function() {
let resultado = removerVocales('estudiando programacion')
assert.equal(resultado, 'stdnd prgrmcn',`removerVocales('estudiando programación') debería retornar 'stdnd prgrmcn' pero fue ${resultado}`);
})