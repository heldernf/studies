/* ESSE CÓDIGO FIZ DUMA FORMA EM QUE ELE AO INVÉS DE EXCLUIR A DIV
QUE FALA QUE VOCÊ NÃO CRIOU NENHUMA TAREFA <div id="sem-tarefas"> ELE 
SUBSTITUI ELA TODA E DEPOIS CRIA AS OUTRAS, POREM O SISTEMA É RUIM, POIS
DEPOIS TENHO QUE USAR UM ELSE E PRA QUE SE CASO A QUANT FOR MAIOR QUE 1 ELE
VAI FAZER O ELSE QUE CRIA UM DIV IDENTICA DO IF QUE REQUER A QUANT == 1, COM
ISSO, TIVE A IDEIA DE UM SISTEMA MIL VEZES MELHOR E MAIS SIMPLES*/

/* OBS: ESSE PRIMEIRO SISTEMA AQUI NÃO FOI IDEIA MINHA, EU ME INSPIREI EM
UM CARA DO GITHUB E ACABEI ME DESAFIANDO DE FAZER ELA SEM OLHAR O CODIGO DELE.*/

// let click = 0; COMENTEI ESSA LINHA APENAS PARA NÃO FICAR VERMELHO O JS
var quant = 1;
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
            placeVariar = setInterval(function() {
                if (inputTarefa.classList.contains('placeholder-alert')) {
                    inputTarefa.classList.remove('placeholder-alert');
                    inputTarefa.placeholder = placeholderInputTarefa;
                } else {
                    inputTarefa.classList.add('placeholder-alert');
                    inputTarefa.placeholder = placeholderInputTarefa + "!";
                }
            }, 200);
    
            // PARA A ALTERNÂNCIA DE COR DO PLACEHOLDER
            setTimeout(function() {
                clearInterval(placeVariar)
                click = 0; // FAZ COM QUE SEJA POSSÍVEL CLICAR NO BOTÃO DE NOVO
            }, 800)

        // CASO O placeVariar AINDA NÃO TIVER ACABADO, O CLICK VAI ESTA COM VALOR 1, O QUE FAZ COM QUE NÃO SEJA POSSÍVEL REALIZAR A MESMA AÇÃO ANTES DO DEVIDO TEMPO "800milisegundos"
        } else {
            console.log("aguarde");
        }

    // SE O INPUT ESTIVER PREENCHIDO:
    } else {
        if (quant == 1) {
            var novaTarefa = document.getElementById('sem-tarefas');
    
            novaTarefa.classList.add('tarefa-block');
            novaTarefa.removeAttribute('id');
    
            novaTarefa.querySelector('img').remove('img');
    
            novaTarefa.querySelector('p').remove('p');
    
            novaTarefa.querySelector('p').classList.add('tarefa-block-p');
            novaTarefa.querySelector('p').removeAttribute('id');
            novaTarefa.querySelector('p').innerHTML = inputTarefa.value;
            var p = novaTarefa.querySelector('p');
    
            var inputCheckbox = document.createElement('input');
            inputCheckbox.type = "checkbox";
            inputCheckbox.name = "nrealizado";
            inputCheckbox.classList.add('realizada');
            novaTarefa.insertBefore(inputCheckbox, p);
    
            var buttonDelTarrefa = document.createElement('button');
            buttonDelTarrefa.addEventListener('click', delTarefa);
            novaTarefa.appendChild(buttonDelTarrefa);
    
            var buttonSpan = document.createElement('span');
            buttonSpan.classList.add('material-symbols-outlined');
            buttonSpan.classList.add('icon-trash');
            buttonSpan.innerHTML = " delete ";
            buttonDelTarrefa.appendChild(buttonSpan);
    
            // LIMPA O INPUT DE ADICIONAR TAREFA
            document.getElementById('tarefa').value = "";

            quant = 2;
        } else {
            var sectionBottom = document.getElementById('section-bottom')
            var novaTarefa = document.createElement('div');
            novaTarefa.classList.add('tarefa-block')
            sectionBottom.appendChild(novaTarefa)

            var inputCheckbox = document.createElement('input');
            inputCheckbox.type = "checkbox";
            inputCheckbox.name = "nrealizado";
            inputCheckbox.classList.add('realizada');
            novaTarefa.appendChild(inputCheckbox);

            var p = document.createElement('p');
            p.classList.add('tarefa-block-p');
            p.innerHTML = inputTarefa.value;
            novaTarefa.appendChild(p);

           var button = document.createElement('button');
           button.addEventListener('click', delTarefa);
           novaTarefa.appendChild(button);

           var buttonSpan = document.createElement('span');
           buttonSpan.classList.add('material-symbols-outlined');
           buttonSpan.classList.add('icon-trash');
           buttonSpan.innerHTML = " delete ";
           button.appendChild(buttonSpan)

           document.getElementById('tarefa').value = "";
        }
    }
}

function delTarefa() {
    alert('funcionando')
}

/* O CODIGO A BAIXO FOI FEITO DEPOIS DO DE CIMA, ELE FICOU BEM MAIS MELHOR, PORÉM DEPOIS
VI A AULA FINAL DO CURSO DE JS E VI UMA MELHOR FORMA DE FAZER ESSES SISTEMA. PORÉM MESMO
NÃO ULTILIZANDO ESSES DOIS CODIGO QUE FIZ SEM VER A AULA FINAL, NÃO ME ARREPENDO DELES
PELO CONTRÁRIO, EU ME ORGULHO, JA QUE OS MESMO SERVIRAM DE APRENDIZADO E ME DERAM OUTRAS
VISÕES PARA FAZER MELHORES LINHAS DE CÓDIGO 14/06/2023 */

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
                if (inputTarefa.classList.contains('placeholder-alert')) {
                    inputTarefa.classList.remove('placeholder-alert');
                    inputTarefa.placeholder = placeholderInputTarefa;
                } else {
                    inputTarefa.classList.add('placeholder-alert');
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



















input.addEventListener('keypress', function (event) {
    if (input.value != "") {
        if (event.keyCode === 13) {
            event.preventDefault();
            addTarefa();
        }
    }  
});