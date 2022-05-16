it("Si hacemos obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') debería retornar 'A mí no me preguntes, sólo soy una oración'", function() {
let resultado = obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')
assert.equal(resultado, 'A mí no me preguntes, sólo soy una oración',`obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración') debería retornar 'A mí no me preguntes, sólo soy una oración' pero fue ${resultado}`);
})

it("Si hacemos obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') debería retornar 'Tengo varias oraciones.'", function() {
let resultado = obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')
assert.equal(resultado, 'Tengo varias oraciones',`obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.') debería retornar 'Tengo varias oraciones.' pero fue ${resultado}`);
})
