it("Si hacemos aHackerSpeak('javascript') debería retornar 'j4v45cr1pt'", function() {
let resultado = aHackerSpeak('javascript')
assert.equal(resultado, 'j4v45cr1pt',`aHackerSpeak('javascript') debería retornar 'j4v45cr1pt' pero fue ${resultado}`);
})

it("Si hacemos aHackerSpeak('soy una hacker') debería retornar '50y un4 h4ck3r'", function() {
let resultado = aHackerSpeak('soy una hacker')
assert.equal(resultado, '50y un4 h4ck3r',`aHackerSpeak('soy una hacker') debería retornar '50y un4 h4ck3r' pero fue ${resultado}`);
})

it("Si hacemos aHackerSpeak('ADA LOVELACE') debería retornar '4D4 L0V3L4C3'", function() {
let resultado = aHackerSpeak('ADA LOVELACE')
assert.equal(resultado, '4D4 L0V3L4C3',`aHackerSpeak('ADA LOVELACE') debería retornar '4D4 L0V3L4C3' pero fue ${resultado}`);
})