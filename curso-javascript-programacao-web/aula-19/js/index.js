const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["v6", "v7", "v8"]
}

// CONVERTEU OBJETO > TEXTO
let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML = texto;

// CONVERTEU TEXTO > OBJETO
let obj = JSON.parse(texto);

console.log(obj.motor[2])