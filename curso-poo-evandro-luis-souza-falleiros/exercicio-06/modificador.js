function fnCapitalizarNovo(colecao, atributo) {
    if (typeof colecao[0] === "object") {
        var resultado = colecao.map((objeto) => {
            var letraInicial = objeto[atributo].charAt(0).toUpperCase();
            var restoTexto = objeto[atributo].slice(1,objeto[atributo].length);

            objeto[atributo] = letraInicial + restoTexto;
            
            return objeto;
        });
        console.log(resultado)
    }
}

function fnCapitalizar(vetor) {
    var modificado = [];

    for (var i = 0; i < vetor.length; i++) {
        var letraInicial = vetor[i].charAt(0).toUpperCase();
        var restoTexto = vetor[i].slice(1, vetor[i].length);
        var resultado = letraInicial + restoTexto;

        modificado[i] = resultado;
    }

    return modificado;
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
    capitalizar: fnCapitalizar,
    ordenar: fnOrdenar,
    caixaAlta: fnCaixaAlta
}