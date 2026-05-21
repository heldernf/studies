function gerarBtn() {
    var inicio = parseInt(document.getElementById('inicio').value); // PEGA O VALOR QUE ESTÁ NO INPUT COM O PLACEHOLDER : INÍCIO
    var fim = parseInt(document.getElementById('fim').value); // PEGA O VALOR QUE ESTÁ NO INPUT COM O PLACEHOLDER : FIM  
    var paragrafo = document.getElementById('resultado'); // PEGA A TEG <p #resultado> QUE ESTÁ DENTRO <div #div-resultado>

    paragrafo.innerHTML = '';

    if (inicio < fim) { // de 0 a 10       
        for (inicio; inicio <= fim; inicio++) {
            paragrafo.innerHTML += inicio + " ";
        }
    } else { // de 10 a 0
        for (inicio; inicio >= fim; inicio--) {
            paragrafo.innerHTML += inicio + " ";
        }
    }
}

function cleanFormAndResult() {
    var inicio = document.getElementById('inicio');
    var fim = document.getElementById('fim');
    var paragrafo = document.getElementById('resultado');

    inicio.value = "";
    fim.value = '';
    paragrafo.innerHTML = '';
}