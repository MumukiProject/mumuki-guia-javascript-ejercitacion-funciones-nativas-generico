it("Si hacemos burlarse('programar es dificil') debería retornar 'prigimir is dificil'", function() {
let resultado = burlarse('programar es dificil')
assert.equal(resultado, 'prigrimir is dificil',`burlarse debería retornar 'prigrimir is dificil' pero fue ${resultado}`);
})