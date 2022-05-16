it("Si hacemos ocultarContrasenia(123456) debería retornar '******'", function() {
let resultado = ocultarContrasenia(123456)
assert.equal(resultado, '******',`ocultarContrasenia(123456) debería retornar '******' pero fue ${resultado}`);
})

it("Si hacemos ocultarContrasenia(111222333) debería retornar '*********'", function() {
let resultado = ocultarContrasenia(111222333)
assert.equal(resultado, '*********',`ocultarContrasenia(111222333) debería retornar '*********' pero fue ${resultado}`);
})