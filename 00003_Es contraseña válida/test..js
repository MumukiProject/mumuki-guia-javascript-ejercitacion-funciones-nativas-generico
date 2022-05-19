it("Si hacemos esValida('contraseniaMuySegura') debería retornar true", function() {
  let resultado = esValida('contraseniaMuySegura')
  assert.equal(resultado, true,`esValida('contraseniaMuySegura') debería retornar true pero fue ${resultado}`);
})

it("Si hacemos esValida('abc123') debería retornar false", function() {
  let resultado = esValida('abc123')
  assert.equal(resultado, false,`esValida('abc123') debería retornar false pero fue ${resultado}`);
})

it("Si hacemos esValida('computadora') debería retornar true", function() {
  let resultado = esValida('computadora')
  assert.equal(resultado, true,`esValida('computadora') debería retornar true pero fue ${resultado}`);
})