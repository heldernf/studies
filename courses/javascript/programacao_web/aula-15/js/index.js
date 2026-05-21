const carros = ["Civic", "Fusca", "Gol", "Saveiro", "Corsa"];

for (var i = 0; i < carros.length; i++) {
    document.getElementById('teste').innerHTML += "| " + i + " | " +  carros[i] + " ";
}

var anoAtual = new Date().getFullYear()

for (var i = anoAtual; i >= anoAtual - 122; i--) {
    document.getElementById('ano').innerHTML += "<option value='" + i + "'>" + i + "</option>";
}