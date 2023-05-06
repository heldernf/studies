const paragrafo = document.getElementById('p');
const botao2 = document.getElementById('btn2');

function verificarCor() {
    const cor = document.getElementById('cor').value.toLowerCase();

    switch (cor) {
        case "azul":
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "blue";
            botao2.style.visibility = "visible" // DEIXA O BOTÃO DE VOLTAR PARA A [COR PADRÃO] VISÍVEL.
            break;
        case "vermelho":
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "red";
            botao2.style.visibility = "visible"
            break;
        case "verde":
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "green";
            botao2.style.visibility = "visible"
            break;
        case "roxo":
            document.body.style.backgroundImage = "none"
            document.body.style.backgroundColor = "purple";
            botao2.style.visibility = "visible"
            break;
        default:
            document.body.style.backgroundImage = "linear-gradient(rgb(3, 97, 221), rgb(11, 122, 196))";
            botao2.style.visibility = "hidden"
            paragrafo.style.visibility = "visible"
            paragrafo.style.color = "red"
            paragrafo.innerHTML = "Cor não encontrada!"
            function esconderMensagem() {
                paragrafo.style.visibility = "hidden"
            }
            setTimeout(esconderMensagem, 4000);
    }
}

function corPadrao() {
    document.body.style.backgroundImage = "linear-gradient(rgb(3, 97, 221), rgb(11, 122, 196))";
    botao2.style.visibility = "hidden"
}