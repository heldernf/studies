class Carro {
    canal = "CFB Cursos";

    constructor(pNome, pTipo) {
        this.nome = pNome;
        this.canal = "YouTube";
        if (pTipo == 1) {
            this.tipo = "Esportivo";
            this.velMax = 300;
        } else if (pTipo == 2) {
            this.tipo = "Utilitário";
            this.velMax = 100;
        } else if (pTipo == 3) {
            this.tipo = "Passeio";
            this.velMax = 160;
        } else {
            this.tipo = "Militar";
            this.velMax = 180;
        }
    }

    getNome() {
        return this.nome;
    }

    getTipo() {
        return this.tipo;
    }

    getVelMax() {
        return this.velMax;
    }

    getInfo() {
        return [this.nome, this.tipo, this.velMax];
    }

    setNome(nome) {
        this.nome = nome;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    setVelMax(velMax) {
        this.velMax = velMax;
    }

    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`V.Max: ${this.velMax}`);
        console.log(`Canal: ${this.canal}`);
    }
}

let c1 = new Carro("Rapidão", 1);
let c2 = new Carro("Super Luxo", 2);
let c3 = new Carro("Bombadão", 4);
let c4 = new Carro("Carrega tudo", 3);

console.log(c1);
console.log(c1.nome);
console.log(c1.tipo);
console.log(c1.velMax);
console.log(c2.nome);
console.log(c3.nome);
console.log(c4.nome);

console.log("\n------------------------------------------------------------------\n\n");

c1.info();

console.log("\n------------------------------------------------------------------\n\n");

console.log(c2.getNome());

console.log("\n------------------------------------------------------------------\n\n");

console.log(c3.getInfo());
console.log(c3.getInfo()[1]);

console.log("\n------------------------------------------------------------------\n\n");

c1.setNome("Setadão");
c1.setTipo("Modificado");
c1.setVelMax(69);
console.log(c1.getNome());
console.log(c1.getTipo());
console.log(c1.getVelMax());