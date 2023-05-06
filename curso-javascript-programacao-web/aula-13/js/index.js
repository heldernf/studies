/*var lampada = prompt('A lâmpada está on/off?');

if(lampada == "on") {
    alert('A lâmpada está ligada.');
}else if (lampada == "off") {
    alert('A lâmpada está desligada.');
}else {
    alert('Digite [on] ou [off].')
}*/

function verificar() {
    let nome = document.getElementById('nome').value;
    let p = document.getElementById('teste');

    if (nome == "" || nome == null) {
        p.innerHTML = "O CAMPO NÃO PODE SER VAZIO.";
        p.style.color = "rgb(225, 39, 18)";
        p.style.textDecoration = "underline";
        p.style.fontWeight = "bold";
    } else {
        p.innerHTML = "ENVIADO..."
        p.style.color = "white";
        p.style.textDecoration = "underline";
        p.style.fontWeight = "bold";
    }
}