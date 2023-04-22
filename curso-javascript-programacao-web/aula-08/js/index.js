function soma (valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 15);

var total = soma(10,40);
alert(total)

function realFordolar(real, dolarcotacao) {
    return real * dolarcotacao
}

var real, dolar, convercao;

real = prompt("Digite quantos reais você tem, e eu conveterei para DÓLAR: ");
dolar = 5.05;

var conversao = realFordolar(real, dolar);
alert("O valor em real é R$" + real + ", ja em dólar é $" + conversao + ".");

function alertaHello () {
    alert("Hello!");
}

function paraCelsius(fahrenheit) {
    return (5/9) * (fahrenheit - 32);
}

var x = paraCelsius(77);
alert("A temperatura é de: " + x + "graus celsius.")