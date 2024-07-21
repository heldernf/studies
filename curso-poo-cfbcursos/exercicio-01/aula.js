class Pessoa {
    constructor(pNome) {
        this.nome = pNome;
    }
}

let p1 = new Pessoa("Helder");
let p2 = new Pessoa("Neto");
let p3 = new Pessoa(10);

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)