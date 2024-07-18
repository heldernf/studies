function fnCapitalizarNovo(colecao, atributo) {
    if (typeof colecao[0] === "object") {
        var resultado = colecao.map((objeto) => {
            var letraInicial = objeto[atributo].charAt(0).toUpperCase();
            var restoTexto = objeto[atributo].slice(1, objeto[atributo].length);

            objeto[atributo] = letraInicial + restoTexto;

            return objeto;
        });
        console.log(resultado)
    } else {
        var resultado = colecao.map((array) => {
            var letraInicial = array.charAt(0).toUpperCase();
            var restoTexto = array.slice(1, array.length);

            return letraInicial + restoTexto;
        });
        console.log(resultado)
    }
}

function fnOrdenar(vetor) {
    return vetor.sort((a, b) => {
        return a.localeCompare(b)
    });
}

function fnCaixaAlta(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase();
    }

    return modificado;
}

export default {
    capitalizarNovo: fnCapitalizarNovo,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}