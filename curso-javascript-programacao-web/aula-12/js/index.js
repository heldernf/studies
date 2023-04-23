const eu = ["Helder", 17, "Neto"];

document.getElementById('texto').innerHTML = eu.join(' > ');

eu.pop(); // REMOVE O ULTIMO ITEM DO ARRAY

document.getElementById('texto2').innerHTML = eu.join(' > ');

eu.push(8.5); // ADICIONA UM ITEM NA ULTIMA POSSIÇAO AO ARRAY

document.getElementById('texto3').innerHTML = eu.join(' > ');

eu.shift(); // REMOVE O PRIMEIRO ITEM DO ARRAY

document.getElementById('texto4').innerHTML = eu.join(' > ');

eu.unshift("Helder"); // ADICIONA UM ITEM NA PRIMEIRA POSIÇÃO AO ARRAY
eu.pop();
eu.push("Neto");

document.getElementById('texto5').innerHTML = eu.join(' > ');

eu.splice(0,0, "adc1", "adc2");

document.getElementById('texto6').innerHTML = eu.join(' > ');

const jogadores = ["Goleiro Bruno kkkkk", "Zé", "Messi", "CR7", "Antonio do geladin"];
const craques = jogadores.slice(2,4);

document.getElementById("texto7").innerHTML = craques.join(' > ');

jogadores.sort();

document.getElementById("texto8").innerHTML = jogadores.join(' > ');

jogadores.reverse();

document.getElementById("texto9").innerHTML = jogadores.join(' > ');

const numeros = [50, 20, 100, 30];

numeros.sort()

document.getElementById('texto10').innerHTML = numeros.join(' > ');

numeros.sort(function(a,b){return a - b});

document.getElementById('texto11').innerHTML = numeros.join(' > ');

numeros.sort(function(a,b){return b - a});

document.getElementById('texto12').innerHTML = numeros.join(' > ');

function maiorNumero(array) {
    return Math.max.apply(null,array);
}

document.getElementById('texto13').innerHTML = maiorNumero(numeros);

function menorNumero(array) {
    return Math.min.apply(null,array);
}

document.getElementById('texto14').innerHTML = menorNumero(numeros);

const maior20 = numeros.filter(filtragem);

function filtragem(value, index, array){
    return value > 20;
}

document.getElementById('texto15').innerHTML = maior20;

maior20.sort(function(a,b){return a - b});

document.getElementById('texto16').innerHTML = maior20;