// RESPONSÁVEL POR NÃO DEIXAR CLICAR NO BOTÃO DE ADD TAREFA MAIS DE UMA VEZ EM MENOS DE UM 800MS SE O INPUT ESTIVER VAZIO, PARA QUE ASSIM, O EFEITO DE ALTERNAR O STILO DO PLACEHOLDER DO INPUT NÃO BUGUE
let click = true;
// CONTADOR PARA INCREMENTAR O ID DAS TAREFAS
let contador = localStorage.getItem('contador');
// CONTADOR PARA INCREMENTAR O ID DAS TAREFAS DO LOCAL STORAGE
let contador2 = 0;
// RESPONSÁVEL POR INCREMENTAR/DESINCREMENTAR O TOTAL DE TAREFAS FEITAS PRO TOTAL EXISTENTE EX: 2 / 5
let tRealizadas = localStorage.getItem('tRealizadas');
// RESPONSÁVEL POR INCREMENTAR/DESINCREMENTAR O TOTAL DE TAREFAS EXISTENTES
let tTarefas = localStorage.getItem('tTarefas');
if (localStorage.getItem('tTarefas') == null) {
    localStorage.setItem('tTarefas', 0);
    localStorage.setItem('tRealizadas', 0);
}
// PEGA O TOTAL DE TAREFAS ADICIONADA
let totalTarefas = document.getElementById('p-total-number');
// PEGA A QUANTIDADE DE TAREFAS REALIZADAS
let totalRealizadas = document.getElementById('p-realizadas-number');

// EXECUTA A FUNÇÃO DE RECRIAR AS TAREFAS ADICIONADAS EM CASO DE RELOAD DA PÁGINA
armazenamento();
function armazenamento() {
    // ATUALIZA OS VALORES DE TAREFAS REALIZADAS E DE TOTAL DE TAREFAS
    totalTarefas.innerHTML = localStorage.getItem('tTarefas');
    totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

    for (var i = 1; i <= contador; i++) {
        if (localStorage.getItem(`tarefa${i}`) != null) {
            tarefaLocalStorage(localStorage.getItem(`tarefa${i}`), i)
        }
    }
}
function tarefaLocalStorage(nomeDaTarefa, i) {
    contador2 = i;
    // RETIRA DE CENA A DIV QUE A MENSAGEM QUE AVISA A PESSOA DE QUE ELA NÃO TEM NENHUMA TAREFA ADICIONADA
    document.getElementById('sem-tarefas').style.display = "none";

    var containerTarefas = document.getElementById('section-bottom');

    var divTarefaBlock = document.createElement('div');
    divTarefaBlock.id = contador2;
    divTarefaBlock.className = "tarefa-block";
    containerTarefas.appendChild(divTarefaBlock);

    var inputRealizada = document.createElement('input');
    inputRealizada.type = "checkbox";
    inputRealizada.name = "nrealizada";
    inputRealizada.className = "realizada";
    inputRealizada.addEventListener('change', check)
    divTarefaBlock.appendChild(inputRealizada);

    if (divTarefaBlock.id == localStorage.getItem(`checkbox${i}`)) {
        inputRealizada.checked = true;
    }

    var pTarefaBlockP = document.createElement('p');
    pTarefaBlockP.className = "tarefa-block-p";
    pTarefaBlockP.innerHTML = nomeDaTarefa;
    divTarefaBlock.appendChild(pTarefaBlockP);

    var buttonDelTarefa = document.createElement('button');
    buttonDelTarefa.addEventListener('click', delTarefa)
    divTarefaBlock.appendChild(buttonDelTarefa);

    var spanIconTrash = document.createElement('span');
    spanIconTrash.className = "material-symbols-outlined icon-trash";
    spanIconTrash.innerHTML = " delete "
    buttonDelTarefa.appendChild(spanIconTrash);
}

// FUNÇÃO PARA ADICIONAR UMA NOVA TAREFA CLICANDO NO BOTÃO
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

        // INCREMENTA O tTarefas PARA MUDAR O TOTAL DE TAREFAS
        tTarefas++;
        totalTarefas.innerHTML = tTarefas;

        // PEGA AS TAREFAS REALIZADAS
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
        localStorage.setItem('tRealizadas', tRealizadas);
        localStorage.setItem('tTarefas', tTarefas);
        // CONTADOR PARA OS ID'S DAS TAREFAS
        contador++

        // ATUALIZA O VALOR DO CONTADOR
        localStorage.setItem('contador', contador);

        localStorage.setItem(`tarefa${contador}`, input.value);

        // LIMPA O INPUT DE ADICONAR TAREFAS E JÁ DEIXA ELE EM FOCO PARA NÃO TER QUE CLICAR NOVAMENTE PARA DIGITAR
        input.value = "";
        input.focus();

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

// FUNÇÃO PARA ADICIONAR UM TAREFA ATRAVÉS DO enter
document.getElementById('tarefa').onkeyup = enter
function enter(event) {
    if (event.keyCode === 13 || event.which === 13) {
        document.getElementById('btn-addTarefa').click();
    }
}

// INCREMENTA/DESINCREMENTA A QUANTIDADE DE TAREFAS FEITAS PARA A QUANTIDADE TOTAL EX: 0 / 3 DEPOIS QUE MARCOU O CHECKBOX DA TAREFA 1 / 3
function check(event) {
    var botaoClicado = event.target || event.srcElement;
    var checkbox = botaoClicado.closest('.realizada');
    if (checkbox.checked) {
        tRealizadas++;
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
        localStorage.setItem('tRealizadas', tRealizadas);
        localStorage.setItem('tTarefas', tTarefas);

        var paiCheckbox = botaoClicado.closest('.tarefa-block')
        localStorage.setItem(`checkbox${paiCheckbox.id}`, paiCheckbox.id)
    } else {
        tRealizadas--;
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
        localStorage.setItem('tRealizadas', tRealizadas);
        localStorage.setItem('tTarefas', tTarefas);

        var paiCheckbox = botaoClicado.closest('.tarefa-block')
        localStorage.removeItem(`checkbox${paiCheckbox.id}`)
    }
}

function delTarefa(event) {
    // SELECIONA E APAGA A TAREFA EM QUE O BOTÃO DE APAGAR FOI CLICADO
    var botaoClicado = event.target || event.srcElement;
    var tarefaBlock = botaoClicado.closest('.tarefa-block');
    var id = tarefaBlock.id;
    tarefaBlock.remove();

    // DESINCREMENTA PARA DIMINUIR O NÚMERO DE TOTAL DE TAREFAS, POIS A MESMA FOI APAGADA
    tTarefas--;
    totalTarefas.innerHTML = tTarefas;
    localStorage.setItem('tTarefas', tTarefas);

    // REMOVE DO LOCAL STORAGE A TAREFA APAGADA
    localStorage.removeItem(`tarefa${id}`);

    // PEGA O INPUT CHECKBOX E DEPOIS DESINCREMENTA SE O INPUT CHECKBOX DA TAREFA QUE FOI SELECIONADA ESTIVER MARCADO
    var checkbox = tarefaBlock.querySelector('input.realizada')
    if (checkbox.checked) {
        tRealizadas--;
    }
    // ATUALIZA O VALOR DO TOTAL DE TAREFAS MARCADAS PARA A QUANTIDADE DO TOTAL DE TAREFAS EXISTENTE
    totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
    localStorage.setItem('tRealizadas', tRealizadas);
    localStorage.setItem('tTarefas', tTarefas);

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

    contador = 0
    localStorage.clear();
}

// MOSTRA O AVISO QUE AUXILIA EM CASO DE BUGS
aviso()
function aviso() {
    var divAviso = document.getElementById('div-aviso');
    var p = divAviso.querySelector('p');
    var vez = 0;
    
    var aviso = setInterval(function () {
        divAviso.style.opacity = "1";
        
        var alternar = setInterval(function () {
            p.style.transform = "translate(0%)";
            if (divAviso.classList.contains('div-aviso-alternar')) {
                divAviso.classList.remove('div-aviso-alternar');
                p.style.color = "rgb(156, 156, 156)";
            } else {
                divAviso.classList.add('div-aviso-alternar');
                p.style.color = "rgb(176, 176, 176)";
            }
        }, 200)
        
        setTimeout(function () {
            clearInterval(alternar);
            
            if (divAviso.classList.contains('div-aviso-alternar') == false) {
                divAviso.classList.add('div-aviso-alternar');
                p.style.color = "rgb(176, 176, 176)";
            }
        }, 1800)
        
        setTimeout(function () {
            if (vez == 0) {
                p.style.transform = "translate(500%)";
                vez++;
            } else {
                p.style.transform = "translate(-500%)";
                vez--;
            }
            divAviso.style.opacity = "0";
        }, 3200)
        
    }, 5000)

    setTimeout(function () {
        clearInterval(aviso);
    }, 20000)
}