class Carro {
    constructor(v1, v2, v3) {
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }

    buzina() {
        return this.modelo + " buzinou: Biiiiiiii";
    }
}

// const carro = {
//     marca: "Volkswagen",
//     modelo: "Kombi",
//     ano: 1997
// }

const Kombi = new Carro("Volkswagen", "Kombi", 1997);
const Gol = new Carro("Volkswagen", "Gol", 2005);
console.log(Kombi)
console.log(Kombi.buzina())
console.log(Gol.buzina())