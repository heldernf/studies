class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
}

var timeoutId;

function fabCar() {
    var h1 = document.getElementById('h1-res');
    var h2 = document.getElementById('h2-res');

    var m = document.getElementById('marca').value;
    var mo = document.getElementById('modelo').value;
    var a = document.getElementById('ano').value;

    if (m == "" || mo == "" || a == "" || a < 1950 || a > 2023) {
        if (a < 1950 || a > 2023) {
            h1.style.color = "red";
            h1.innerHTML = "A ano do carro não pode ser menor que 1950 ou maior que 2023.";
        
            h2.innerHTML = "";

            timeoutId = setTimeout (function () {
                h1.innerHTML = "Tente novamente!";
                
                setTimeout (function () {
                    h1.innerHTML = "";
                }, 1000);

            }, 3000)
        } else {
            h1.style.color = "red";
            h1.innerHTML = "Preencha todos os campos!";
            
            h2.innerHTML = "";
            
            timeoutId = setTimeout (function () {
                h1.innerHTML = "Tente novamente!";

                setTimeout (function () {
                    h1.innerHTML = "";
                }, 1000)

            }, 3000);
        }
    } else {
        clearTimeout(timeoutId);

        const carro = new Carro(m, mo, a);
        
        h1.style.color = "black";
        h1.innerHTML = "Seu carro:";

        h2.innerHTML = "<span style='color: rgb(27, 98, 190);'>Marca:</span>" + carro.marca + " <span style='color: rgb(27, 98, 190);'>Modelo:</span>" + carro.modelo + " <span style='color: rgb(27, 98, 190);'>Ano:</span>" + carro.ano;
    }
}

// FALTOU BOTAR PRO ANO ATUALIZAR AUTO.