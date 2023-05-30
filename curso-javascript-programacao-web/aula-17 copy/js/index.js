class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    teste() {
        return this.modelo + " testado";
    }
}

function fabCar() {
    var h1 = document.getElementById('h1-res');
    var h2 = document.getElementById('h2-res');

    var m = document.getElementById('marca').value;
    var mo = document.getElementById('modelo').value;
    var a = document.getElementById('ano').value;

    

    if (m == "" || mo == "" || a == "") {
        h1.innerHTML = "Preencha todos os campos."
        
        h2.innerHTML = ""

        setTimeout (function () {
            h1.innerHTML = ""
        }, 5000)
    } else {
        const carro = new Carro(m, mo, a);
        console.log(carro)

        h1.innerHTML = "Seu carro:"

        h2.innerHTML = " " + carro.marca + " " + carro.modelo + " " + carro.ano
    }

}