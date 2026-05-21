import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

const ingredientesFormatados = modificador.capitalizar(ingredientes, "nome");
const ingredientesOrdenados = modificador.ordenar(ingredientesFormatados, "nome");
const containerIngredientes = document.getElementById("container-ingredientes");

for (let ingrediente of ingredientesOrdenados) {
    let textoHTML = `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}" alt="Foto do ">
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `;
    containerIngredientes.innerHTML += textoHTML
}