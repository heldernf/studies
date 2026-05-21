import modificador from './modificador.js';

var ingredientes = ["mel", "água", "sal", "mostarda"];

var resultadoCapitalizado = modificador.capitalizar(ingredientes);
var resultadoOrdenacao = modificador.ordenar(resultadoCapitalizado)
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes)
console.log(resultadoCapitalizado)
console.log(resultadoOrdenacao)
console.log(resultadoCaixaAlta)