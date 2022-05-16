it("Si hacemos obtenerSubreddit('https://www.reddit.com/r/javascript/') debería retornar 'javascript'", function() {
let resultado = obtenerSubreddit('https://www.reddit.com/r/javascript/')
assert.equal(resultado, 'javascript',`obtenerSubreddit('https://www.reddit.com/r/javascript/') debería retornar 'javascript' pero fue ${resultado}`);
})

it("Si hacemos obtenerSubreddit('https://www.reddit.com/r/aww/') debería retornar 'aww'", function() {
let resultado = obtenerSubreddit('https://www.reddit.com/r/aww/')
assert.equal(resultado, 'aww',`obtenerSubreddit('https://www.reddit.com/r/aww/') debería retornar 'aww' pero fue ${resultado}`);
})