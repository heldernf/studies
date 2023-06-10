/* ESSE CÓDIGO FIZ DUMA FORMA EM QUE ELE AO INVÉS DE EXCLUIR A DIV
QUE FALA QUE VOCÊ NÃO CRIOU NENHUMA TAREFA <div id="sem-tarefas"> ELE 
SUBSTITUI ELA TODA E DEPOIS CRIA AS OUTRAS, POREM O SISTEMA É RUIM, POIS
DEPOIS TENHO QUE USAR UM ELSE E PRA QUE SE CASO A QUANT FOR MAIOR QUE 1 ELE
VAI FAZER O ELSE QUE CRIA UM DIV IDENTICA DO IF QUE REQUER A QUANT == 1, COM
ISSO, TIVE A IDEIA DE UM SISTEMA MIL VEZES MELHOR E MAIS SIMPLES*/

/* OBS: ESSE PRIMEIRO SISTEMA AQUI NÃO FOI IDEIA MINHA, EU ME INSPIREI EM
UM CARA DO GITHUB E ACABEI ME DESAFIANDO DE FAZER ELA SEM OLHAR O CODIGO DELE.*/

let click = 0;
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
                if (inputTarefa.classList.contains('placeholder-red')) {
                    inputTarefa.classList.remove('placeholder-red');
                    inputTarefa.placeholder = placeholderInputTarefa;
                } else {
                    inputTarefa.classList.add('placeholder-red');
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