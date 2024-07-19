import modificador from './modificador.js';
import ingredientes from './ingredientes.js';

let ingredientesOrdenados = modificador.ordenar(ingredientes, "nome");
const containerIngredientes = document.getElementById("container-ingredientes");

for (let ingrediente of ingredientesOrdenados) {
    let textoHTML = `
        <div class="ingrediente">
            <img src="img/${ingrediente.img}" alt="Foto do ">
            <p class="nome-ingrediente">${ingrediente.nome}</p>
        </div>
    `;1
    containerIngredientes.innerHTML += textoHTML
}