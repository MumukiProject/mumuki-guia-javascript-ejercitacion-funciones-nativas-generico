it("Si hacemos removerVocales('javascript') debería retornar 'jvscrpt'", function() {
let resultado = removerVocales('javascript')
assert.equal(resultado, 'jvscrpt',`removerVocales('javascript') debería retornar 'jvscrpt' pero fue ${resultado}`);
})

it("Si hacemos removerVocales('ada lovelace') debería retornar 'd lvlc'", function() {
let resultado = removerVocales('ada lovelace')
assert.equal(resultado, 'd lvlc',`removerVocales('ada lovelace') debería retornar 'd lvlc' pero fue ${resultado}`);
})