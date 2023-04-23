function eventoClick() {
    document.body.style.backgroundImage = "linear-gradient(red, blue)";
}

function envetoDblClick() {
    document.body.style.backgroundImage = "linear-gradient(to left, red, blue)";
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "darkred";
}

function voltaNormal() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "green";
}

function adicionaTexto() {
    let p = document.getElementById("texto").innerHTML = "O mouse moveu";
    // p.append('O mouse moveu'); 
}

function limpaTexto() {
    document.getElementById("campoTexto").value = "";
}

function mudou() {
    console.log('Mudou')
}

function teclaPressionada() {
    let input = document.getElementById("campoTexto").value;
    console.log(input)
}