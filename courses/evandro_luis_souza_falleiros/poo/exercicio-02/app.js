var ingredientes = ["mel", "água", "sal", "mostarda"];

function capitalizar(ingredientes) {
    var modificado = [];

    for (var i = 0; i < ingredientes.length; i++) {
        var letraInicial = ingredientes[i].charAt(0).toUpperCase();
        var restoTexto = ingredientes[i].slice(1, ingredientes[i].length);
        var resultado = letraInicial + restoTexto;

        modificado[i] = resultado;
    }

    return modificado;
}

function ordenar(ingredientes) {
    return ingredientes.sort((a, b) => {
        return a.localeCompare(b)
    });
}

var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenacao = ordenar(resultadoCapitalizado)
console.log(resultadoCapitalizado)
console.log(resultadoOrdenacao)