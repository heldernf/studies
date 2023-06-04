// DATA COMPLETA
let data = new Date();
console.log(data);

// ANO
let ano = data.getFullYear();
console.log(ano);

// MÊS
// OBS: data.getMonth te retorna um valor de 0 - 11, sendo JANEIRO==0 e DEZEMBRO==11
// OBS2: LOGO ABAIXO JA ÉSTÁ CONVERTIDO OS NUMEROS DE 0 - 11 PARA O NOME DO MÊS
let mes = data.getMonth();
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abriu", "Maio", "Junho", 
"Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
console.log(mesesDoAno[mes]);

// DIA DO MÊS
let diaDoMes = data.getDate();
console.log(diaDoMes);

// DIA DA SEMANA
// OBS: data.getDay te retorna um valor de 0 - 6, sendo DOMINGO==0 e SÁBADO==6
// OBS2: LOGO ABAIXO JA ÉSTÁ CONVERTIDO OS NUMEROS DE 0 - 6 PARA O DIA DA SEMANA
let diaDaSemana = data.getDay();
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
console.log(diasDaSemana[diaDaSemana]);

// HORAS 0 - 23
let horas = data.getHours();
console.log(horas);

// MINUTOS 0 - 59
let minutos = data.getMinutes();
console.log(minutos);

// SEGUNDOS 0 - 59
let segundos = data.getSeconds();
console.log(segundos);

// MILISEGUNDOS 0 - 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// DATA NO PADRÃO BRASILEIRO DIA / MÊS / ANO
let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR);

// DATA NO PADRÃO BRASILEIRO SEPARADO

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) {
    return x < 10 ? '0' + x : '' + x;
};

let dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + ano;
console.log(dataPadraoBR)

// COMPARAR DATAS

var hoje = new Date();
var vencimento = new Date(2023, 5, 3);

if (hoje > vencimento) {
    console.log("Sua conta está vencida.");
} else {
    console.log("Sua conta não está vencida.");
}

// DIFERENÇA ENTRE DUAS DATAS

var dataInicial = new Date();
var dataFinal = new Date(2023, 11, 29);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))

console.log(diferencaDias + " dias")