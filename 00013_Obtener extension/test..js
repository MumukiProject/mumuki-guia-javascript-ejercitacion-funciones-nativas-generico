it("Si hacemos obtenerExtension('imagen.png') debería retornar 'png'", function() {
let resultado = obtenerExtension('imagen.png')
assert.equal(resultado, 'png',`obtenerExtension('imagen.png') debería retornar 'png' pero fue ${resultado}`);
})

it("Si hacemos obtenerExtension('index.html') debería retornar 'html'", function() {
let resultado = obtenerExtension('index.html')
assert.equal(resultado, 'html',`obtenerExtension('index.html') debería retornar 'html' pero fue ${resultado}`);
})

