it("Si hacemos esElUltimoCaracter('lovelace', 'e') debería retornar true", function() {
  let resultado = esElUltimoCaracter('lovelace', 'e')
  assert.equal(resultado, true,`esElUltimoCaracter ('lovelace','e') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esElUltimoCaracter('lovelace', 'f') debería retornar false", function() {
  let resultado = esElUltimoCaracter('lovelace', 'f')
  assert.equal(resultado, false,`esElUltimoCaracter ('lovelace','f') debería retornar false pero fue ${resultado}`);
})