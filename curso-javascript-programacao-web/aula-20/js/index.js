// RESPONSÁVEL POR NÃO DEIXAR CLICAR NO BOTÃO DE ADD TAREFA MAIS DE UMA VEZ EM MENOS DE UM 800MS SE O INPUT ESTIVER VAZIO, PARA QUE ASSIM, O EFEITO DE ALTERNAR O STILO DO PLACEHOLDER DO INPUT NÃO BUGUE
let click = true;
// CONTADOR PARA INCREMENTAR O ID DAS TAREFAS
let contador = 0;
// RESPONSÁVEL POR INCREMENTAR/DESINCREMENTAR O TOTAL DE TAREFAS FEITAS PRO TOTAL EXISTENTE EX: 2 / 5
let tRealizadas = 0;
// RESPONSÁVEL POR INCREMENTAR/DESINCREMENTAR O TOTAL DE TAREFAS EXISTENTES
let tTarefas = 0;
// PEGA O TOTAL DE TAREFAS ADICIONADA
let totalTarefas = document.getElementById('p-total-number');
// PEGA A QUANTIDADE DE TAREFAS REALIZADAS
let totalRealizadas = document.getElementById('p-realizadas-number');

// FUNÇÃO PARA ADICIONAR UM TAREFA ATRAVÉS DO enter
document.getElementById('tarefa').onkeyup = enter
function enter(event) {
    if (event.keyCode === 13 || event.which === 13) {
        document.getElementById('btn-addTarefa').click();
    }
}

// FUNÇÃO PARA ADICIONAR UMA NOVA TAREFA
function addTarefa() {
    // PEGA TODO O INPUT DE ADICIONAR TAREFA
    var input = document.getElementById('tarefa');
    // PEGA O QUE FOI DIGITADO NO INPUT
    var inputValue = input.value;
    // PEGA O PLACEHOLDER DO INPUT DE ADD TAREFA
    var placeholderInput = input.placeholder;
    // PEGA A DIV QUE MOSTRA A MENSAGEM QUE AVISA A PESSOA DE QUE ELA NÃO TEM NENHUMA TAREFA ADICIONADA
    var semTarefas = document.getElementById('sem-tarefas');

    // SE NÃO TIVER NADA NO INPUT, NADA ACONTECERÁ:
    if (inputValue == "" || inputValue == null || inputValue == undefined) {
        if (click == true) {
            // FAZ COM QUE O addTarefa() NÃO SEJA EXECUTADO EM QUANTO O TEMPO DO EFEITO DE ALTERNA PLACEHOLDER NÃO ACABA, FAZENDO COM QUE O EFEITO NÃO BUGUE
            click = false;
            // FAZ O EFEITO DO PLACEHOLDER MUDAR QUANDO O INPUT DE ADICIONAR TAREFA ESTIVER VAZIO E A PESSOA TENTAR ADD UMA TAREFA
            var alternaPlaceholder = setInterval(function () {
                if (input.classList.contains('placeholder-alert')) {
                    input.classList.remove('placeholder-alert')
                    input.placeholder = placeholderInput;
                } else {
                    input.classList.add('placeholder-alert');
                    input.placeholder = placeholderInput + "!";
                }
            }, 200);

            // PARA O EFEITO DE ALTERNAR O PLACEHOLDER
            var stopAlternarPlaceholder = setTimeout(function () {
                clearTimeout(alternaPlaceholder);
                // ZERA O CLICK PARA PODER CLICAR NOVAMENTE NO BOTÃO DE ADICIONAR TAREFA
                click = true;
                input.focus();
            }, 800);
        }
    } else {
        // RETIRA DE CENA A DIV QUE A MENSAGEM QUE AVISA A PESSOA DE QUE ELA NÃO TEM NENHUMA TAREFA ADICIONADA
        semTarefas.style.display = "none";

        // LIMPA O INPUT DE ADICONAR TAREFAS E JÁ DEIXA ELE EM FOCO PARA NÃO TER QUE CLICAR NOVAMENTE PARA DIGITAR
        input.value = "";
        input.focus();

        // INCREMENTA O tTarefas PARA MUDAR O TOTAL DE TAREFAS
        tTarefas++;
        totalTarefas.innerHTML = tTarefas;

        // PEGA AS TAREFAS REALIZADAS
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;

        // CONTADOR
        contador++

        // PEGA A DIV CONTAINER DAS TAREFAS QUE VÃO SER ADICIONADA
        var containerTarefas = document.getElementById('section-bottom');

        var divTarefaBlock = document.createElement('div');
        divTarefaBlock.id = contador;
        divTarefaBlock.className = "tarefa-block";
        containerTarefas.appendChild(divTarefaBlock);

        var inputRealizada = document.createElement('input');
        inputRealizada.type = "checkbox";
        inputRealizada.name = "nrealizada";
        inputRealizada.className = "realizada";
        inputRealizada.addEventListener('change', check)

        divTarefaBlock.appendChild(inputRealizada);

        var pTarefaBlockP = document.createElement('p');
        pTarefaBlockP.className = "tarefa-block-p";
        pTarefaBlockP.innerHTML = inputValue;
        divTarefaBlock.appendChild(pTarefaBlockP);

        var buttonDelTarefa = document.createElement('button');
        buttonDelTarefa.addEventListener('click', delTarefa)
        divTarefaBlock.appendChild(buttonDelTarefa);

        var spanIconTrash = document.createElement('span');
        spanIconTrash.className = "material-symbols-outlined icon-trash";
        spanIconTrash.innerHTML = " delete "
        buttonDelTarefa.appendChild(spanIconTrash);
    }
}

// INCREMENTA/DESINCREMENTA A QUANTIDADE DE TAREFAS FEITAS PARA A QUANTIDADE TOTAL EX: 0 / 3 DEPOIS QUE MARCOU O CHECKBOX DA TAREFA 1 / 3
function check(event) {
    var botaoClicado = event.target || event.srcElement;
    var checkbox = botaoClicado.closest('.realizada');
    if (checkbox.checked) {
        tRealizadas++;
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
    } else {
        tRealizadas--;
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
    }
}

function delTarefa(event) {
    // SELECIONA E APAGA A TAREFA EM QUE O BOTÃO DE APAGAR FOI CLICADO
    var botaoClicado = event.target || event.srcElement;
    var tarefaBlock = botaoClicado.closest('.tarefa-block');
    tarefaBlock.remove();

    // DESINCREMENTA PARA DIMINUIR O NÚMERO DE TOTAL DE TAREFAS, POIS A MESMA FOI APAGADA
    tTarefas--;
    totalTarefas.innerHTML = tTarefas;

    // PEGA O INPUT CHECKBOX E DEPOIS DESINCREMENTA SE O INPUT CHECKBOX DA TAREFA QUE FOI SELECIONADA ESTIVER MARCADO
    var checkbox = tarefaBlock.querySelector('input.realizada')
    if (checkbox.checked) {
        tRealizadas--;
    }
    // ATUALIZA O VALOR DO TOTAL DE TAREFAS MARCADAS PARA A QUANTIDADE DO TOTAL DE TAREFAS EXISTENTE
    totalRealizadas.innerHTML = tRealizadas + "/" + tTarefas;

    // SE TODAS AS TAREFAS FOREM APAGADAS, A DIV QUE MOSTRA A MENSAGEM DE QUE NÃO TEM TAREFAS, APARECE
    if (tTarefas == 0) {
        document.getElementById('sem-tarefas').style.display = "block";
    }
}

// DELETA TODAS AS TAREFAS
function delTodasTarefa() {
    var ttt = document.querySelectorAll('.tarefa-block');
    ttt.forEach(function (elemento) {
        elemento.remove();
    });

    tTarefas = 0;
    totalTarefas.innerHTML = '0'
    tRealizadas = 0;
    totalRealizadas.innerHTML = '0 / 0'

    // A DIV QUE MOSTRA A MENSAGEM DE QUE NÃO TEM TAREFAS, APARECE
    document.getElementById('sem-tarefas').style.display = "block";
}