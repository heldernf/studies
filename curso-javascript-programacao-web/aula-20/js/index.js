let click = 0;
let totalTarefas = 0;
let checked = 0;
function addTarefa() {
    var inputTarefa = document.getElementById('tarefa');
    var placeholderInputTarefa = inputTarefa.placeholder;
    var inputTarefaValue = document.getElementById('tarefa').value;

    // SE O INPUT DE ADICIONAR TAREFA ESTIVER VAZIO, NÃO VAI SER POSSÍVEL ADICIONAR NADA ""
    if (inputTarefaValue == "") {

        // ESSA CONDIÇÃO É PARA QUE NÃO HAJA MAIS UM CLICK EM MENOS DE 800miliseconds, PARA EVITAR QUE BUGUE
        if (click == 0) {
            click = 1;

            // FAZ A COR DO PLACEHOLDER ALTERNAR ENTRE VERMELHO E A COR PADRÃO DELE E ADICONA UMA "!" AO FINAL DELE, COM A MESMA VARIAÇÃO DA COR
            placeVariar = setInterval(function () {
                if (inputTarefa.classList.contains('placeholder-red')) {
                    inputTarefa.classList.remove('placeholder-red');
                    inputTarefa.placeholder = placeholderInputTarefa;
                } else {
                    inputTarefa.classList.add('placeholder-red');
                    inputTarefa.placeholder = placeholderInputTarefa + "!";
                }
            }, 200);

            // PARA A ALTERNÂNCIA DE COR DO PLACEHOLDER
            setTimeout(function () {
                clearInterval(placeVariar)
                click = 0; // FAZ COM QUE SEJA POSSÍVEL CLICAR NO BOTÃO DE NOVO
            }, 800)

            // CASO O placeVariar AINDA NÃO TIVER ACABADO, O CLICK VAI ESTA COM VALOR 1, O QUE FAZ COM QUE NÃO SEJA POSSÍVEL REALIZAR A MESMA AÇÃO ANTES DO DEVIDO TEMPO "800milisegundos"
        } else {
            console.log("aguarde");
        }

        // SE O INPUT ESTIVER PREENCHIDO:
    } else {
        // BOTA DISPLAY "none" NA <div> QUE MOSTRA UMA MENSAGEM QUANDO VOCÊ AINDA NÃO ADICONOU TAREFAS
        var semTarefas = document.getElementById('sem-tarefas').style.display = "block";
        if (semTarefas === 'block') {
            document.getElementById('sem-tarefas').style.display = "none";
        }

        // -----------------CRIAÇÃO DA DIV DE TAREFA-----------------
        var sectionBottom = document.getElementById('section-bottom')

        // CRIA DIV QUE VAI ESTÁ NA #section-bottom
        var novaTarefa = document.createElement('div');
        novaTarefa.classList.add('tarefa-block')
        sectionBottom.appendChild(novaTarefa)

        // CRIA INPUT DO TIPO CHECKBOX QUE VAI ESTÁ NA <div> CRIADA DENTRO DO #section-bottom
        var inputCheckbox = document.createElement('input');
        inputCheckbox.type = "checkbox";
        inputCheckbox.name = "nrealizado";
        inputCheckbox.classList.add('realizada');
        inputCheckbox.addEventListener('change', check);
        novaTarefa.appendChild(inputCheckbox);

        // CRIA <p> QUE VAI ESTÁ NA <div> CRIADA DENTRO DO #section-bottom
        var p = document.createElement('p');
        p.classList.add('tarefa-block-p');
        p.innerHTML = inputTarefa.value;
        novaTarefa.appendChild(p);

        // CRIA <button> QUE VAI ESTÁ NA <div> CRIADA DENTRO DO #section-bottom
        var button = document.createElement('button');
        button.addEventListener('click', delTarefa);
        novaTarefa.appendChild(button);

        // CRIA <span> QUE VAI ESTÁ NO <button> CRIADO DENTRO DA <div> QUE FOI CRIADO DENTRO DO #section-bottom
        var buttonSpan = document.createElement('span');
        buttonSpan.classList.add('material-symbols-outlined');
        buttonSpan.classList.add('icon-trash');
        buttonSpan.innerHTML = " delete ";
        button.appendChild(buttonSpan)

        // LIMPA O INPUT EM QUE VOCÊ ADICIONA A SUA TAREFA
        document.getElementById('tarefa').value = "";

        // MOSTRA A QUANTIDA DE TAREFAS QUE FORAM CRIADAS
        totalTarefas++;
        document.getElementById('p-total-number').innerHTML = totalTarefas;
        document.getElementById('p-realizadas-number').innerHTML = checked + " / " + totalTarefas;
    }
}

// SE O INPUT FOR MARCADO, ELE EXECUTA ESSA FUNÇÃO QUE ATUALIZA A QUANT DE TAREFAS REALIZADAS
function check() {
    if (this.checked) {
        checked++;
        document.getElementById('p-realizadas-number').innerHTML = checked + " / " + totalTarefas;
    } else {
        checked--;
        document.getElementById('p-realizadas-number').innerHTML = checked + " / " + totalTarefas;
    }
}

// NÃO SABIA COMO FAZER A PEDI AJUDA AO CHAT GPT SOBRE ESSA FUNCTION DE DELETAR TAREFAS
function delTarefa(event) {
    var botaoClicado = event.target || event.srcElement;
    var tarefaBlock = botaoClicado.closest('.tarefa-block');

    tarefaBlock.remove(); // APAGA O tarefa-block

    // DESINCREMENTA O checkd PARA QUE AS TAREFAS "EX: 1 / 2" SEJA ATUALIZADO "EX: 0 / 2"
    var checkbox = tarefaBlock.querySelector('.realizada'); // Encontra o input checkbox dentro do elemento '.tarefa-block'
    if (checkbox.checked) {
        checked--;
    }

    totalTarefas--;
    document.getElementById('p-total-number').innerHTML = totalTarefas;
    document.getElementById('p-realizadas-number').innerHTML = checked + " / " + totalTarefas;

    // FAZ A MENSAGEM QUE FALA QUE NÃO FOI CRIADA NENHUMA TAREFA, APARECER
    if (totalTarefas == 0) {
        document.getElementById('sem-tarefas').style.display = "block";
    };
}