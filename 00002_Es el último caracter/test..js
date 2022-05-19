internetit("Si hacemos esElUltimoCaracter('internet', 't') debería retornar true", function() {
  let resultado = esElUltimoCaracter('internet', 't')
  assert.equal(resultado, true,`esElUltimoCaracter ('internet','t') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esElUltimoCaracter('internet', 'f') debería retornar false", function() {
  let resultado = esElUltimoCaracter('internet', 'f')
  assert.equal(resultado, false,`esElUltimoCaracter ('internet','f') debería retornar false pero fue ${resultado}`);
})