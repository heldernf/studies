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

// DIV PARA QUANDO NÃO TIVER NENHUM TAREFA OU QUANDO APAGAR TODAS AS TAREFAS
var semTarefas = document.getElementById('sem-tarefas');

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

    // FAZ COM QUE A TAREFA SEMPRE SEJA ADICIONADA A CIMA DA TAREFA QUE ESTÁ NO TOPO
    var primeiraTarefa = containerTarefas.firstChild;
    containerTarefas.insertBefore(divTarefaBlock, primeiraTarefa);
}

// FUNÇÃO PARA ADICIONAR UMA NOVA TAREFA CLICANDO NO BOTÃO
function addTarefa() {
    // PEGA TODO O INPUT DE ADICIONAR TAREFA
    var input = document.getElementById('tarefa');
    // PEGA O QUE FOI DIGITADO NO INPUT
    var inputValue = input.value;
    // PEGA O PLACEHOLDER DO INPUT DE ADD TAREFA
    var placeholderInput = input.placeholder;

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

        // FAZ COM QUE A TAREFA SEMPRE ADICIONADA A CIMA DA TAREFA QUE ESTÁ NO TOPO
        var primeiraTarefa = containerTarefas.firstChild;
        containerTarefas.insertBefore(divTarefaBlock, primeiraTarefa);
    }
}

// FUNÇÃO PARA ADICIONAR UM TAREFA ATRAVÉS DO enter
document.getElementById('tarefa').onkeyup = enter
function enter(event) {
    if (event.keyCode === 13 || event.which === 13) {
        document.getElementById('btn-addTarefa').click();
    }
}

function check(event) {

    const inputSelecionado = event.target || event.srcElement; // PROCURA QUAL input:checkbox FOI MARCADO
    const paiInputSelecionado = inputSelecionado.closest('.tarefa-block');
    const paiInputSelecionadoId = paiInputSelecionado.id;
    const containerTarefas = document.getElementById('section-bottom');
    const ultimoFilho = containerTarefas.lastChild;

    if (inputSelecionado.checked) {

        // ATUALIZA AS TAREFAS QUE FORAM REALIZADAS
        tRealizadas++;
        localStorage.setItem('tRealizadas', tRealizadas);
        totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

        // GUARDA NO localStorage A INFO DE QUE O INPUT ESTÁ MARCADO
        localStorage.setItem(`checkbox${paiInputSelecionadoId}`, paiInputSelecionadoId);

        // BOTA A TAREFA PRO ULTIMO LUGAR
        containerTarefas.appendChild(paiInputSelecionado);
        containerTarefas.insertBefore(paiInputSelecionado, ultimoFilho);

    } else {

        // ATUALIZA AS TAREFAS QUE FORAM DESMARCADAS
        tRealizadas--;
        localStorage.setItem('tRealizadas', tRealizadas);
        totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

        // REMOVE NO localStorage A INFO DE QUE O input:checkbox DA TAREFA, ESTÁ MARCADO
        localStorage.removeItem(`checkbox${paiInputSelecionado.id}`)

        /* PEGA O ID DA TAREFA MARCADA E SUBTRAI 1 PARA QUE SEJA POSSÍVEL
        ENCONTRAR A TAREFA QUE VEM DEPOIS DELA, PARA QUE SEJA POSSÍVEL VOLTAR
        A TAREFA QUE FOI DESMARCADA, PARA SUA POSIÇÃO DE ORIGEM */
        let calculo = parseInt(paiInputSelecionadoId) - 1;
        let tarefaSucessora = document.getElementById(calculo);
        /* FAZ VERIFICAÇÕES PARA O CASO DE NÃO ACHAR A TAREFA SUCESSORA DA
        TAREFA MARCADA */
        if (tarefaSucessora == null) {
            while (tarefaSucessora == null) {
                calculo--;
                tarefaSucessora = document.getElementById(calculo);

                /* ESSA CONDIÇÃO SERVE PARA QUE QUANDO NÃO FOR ACHADO NENHUMA
                TAREFA SUCESSORA DA TAREFA MARCADA, O LOOP PARE*/
                if (calculo <= -1) {
                    break;
                }
            }
        }

        // RETORNA A TAREFA DESMARCADA PARA A SUA POSIÇÃO ORIGINAL
        containerTarefas.insertBefore(paiInputSelecionado, tarefaSucessora);
    }
}

// DELETA A TAREFA
function delTarefa(event) {

    const iconeLixeira = event.target || event.srcElement;
    const tarefaBlock = iconeLixeira.closest('.tarefa-block');
    const tarefaBlockId = tarefaBlock.id;
    const tarefaBlockCheckbox = tarefaBlock.querySelector('input.realizada')

    // REMOVE A TAREFA
    tarefaBlock.remove();

    // ATUALIZA O TOTAL DE TAREFAS
    tTarefas--;
    localStorage.setItem('tTarefas', tTarefas);
    totalTarefas.innerHTML = localStorage.getItem('tTarefas');

    // REMOVE DO localStorage A TAREFA QUE FOI APAGADA
    localStorage.removeItem(`tarefa${tarefaBlockId}`);

    // ATUALIZA O TOTAL DE TAREFAS REALIZADAS CASO O CHECKBOX TIVER MARCADO QUANDO A TAREFA É APAGADA
    if (tarefaBlockCheckbox.checked) {
        tRealizadas--;
        localStorage.setItem('tRealizadas', tRealizadas);
    }

    // ATUALIZA O VALOR DO TOTAL DE TAREFAS MARCADAS PARA A QUANTIDADE DO TOTAL DE TAREFAS EXISTENTE
    totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

    // SE TODAS AS TAREFAS FOREM APAGADAS, A DIV QUE MOSTRA A MENSAGEM DE QUE NÃO TEM TAREFAS, APARECE
    if (localStorage.getItem('tTarefas') == 0) {
        document.getElementById('sem-tarefas').style.display = "block";
    }

}

// DELETA TODAS AS TAREFAS
function delTodasTarefa() {

    const allTarefaBlock = document.querySelectorAll('.tarefa-block');

    // REMOVE TODAS AS TAREFAS
    allTarefaBlock.forEach(function (elemento) {
        elemento.remove();
    });

    // ATUALIZA O VALOR DO TOTAL DE TAREFAS E DO TOTAL DE TAREFAS REALIZADAS
    localStorage.setItem('tTarefas', 0);
    localStorage.setItem('tRealizadas', 0);
    totalTarefas.innerHTML = localStorage.getItem('tTarefas');
    totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

    // DIV PARA QUANDO NÃO TIVER NENHUM TAREFA
    semTarefas.style.display = "block";

    localStorage.clear();

}

// MOSTRA O AVISO QUE AUXILIA EM CASO DE BUGS
aviso()
function aviso() {

    const divAviso = document.getElementById('div-aviso');
    const divAvisoP = divAviso.querySelector('p');

    /* RESPONSÁVEL POR INFORMAR EM QUE VEZ O ALERTA ESTÁ, SE FOR 1, ELE
    DESAPARECERAR PARA A DIREITA E DEPOIS PARA ESQUERDA*/
    let vez = 1;

    const aviso = setInterval(function () {

        divAviso.style.opacity = "1";

        // ADICIONA E REMOVE A CLASSE .div-aviso-alternar A CADA 200ms, E MAIS...
        const alternar = setInterval(function () {

            // BOTA O <p> DA #div-aviso NO CENTRO DA div#section-top
            // A POSIÇÃO INICIAL DO <p> É -500%
            divAvisoP.style.transform = "translate(0%)";

            /* ADICIONA E REMOVE A CLASSE .div-aviso-alternar PARA ALTERNAR A 
            ESTILIZAÇÃO DO <p> E TAMBÉM ALTERA A COR PARA CHAMAR MAIS ATENÇÃO */
            // O PADRÃO DA #div-aviso É NÃO TER A CLASSE .div-aviso-alternar
            if (divAviso.classList.contains('div-aviso-alternar')) {
                divAviso.classList.remove('div-aviso-alternar');
                divAvisoP.style.color = "rgb(156, 156, 156)";
            } else {
                divAviso.classList.add('div-aviso-alternar');
                divAvisoP.style.color = "rgb(176, 176, 176)";
            }

        }, 200) // 200 MILISEGUNDOS

        // PARA A const alternar
        setTimeout(function () {

            clearInterval(alternar);

        }, 1800) // 1 SEGUNDOS E 800 MILISEGUNDOS

        // RETIRA O AVISO DEPOIS DE 5 SEGUNDOS E 600 MILISEGUNDOS 
        setTimeout(function () {

            divAviso.style.opacity = "0";

            // RETIRA A CLASSE DA #div-aviso PARA ELA RETORNAR AO SEU PADRÃO
            divAviso.classList.remove('div-aviso-alternar')

            // RESPONSÁVEL POR DIZER PARA QUE LADO A O <p> IRÁ
            // SE FOR A PRIMEIRA APARIÇÃO"(1)"" ELE VAI PARA A DIREITA
            // SE FOR A SEGUNDA APARIÇÃO"(2)" ELA VAI PARA A ESQUERDA
            if (vez == 1) {
                divAvisoP.style.transform = "translate(500%)";
                vez++;
            } else {
                divAvisoP.style.transform = "translate(-500%)";
                vez--;
            }

        }, 5600) // 5 SEGUNDOS E 600 MILISEGUNDOS

    }, 20000) // 20 SEGUNDOS

    // PARA A const aviso
    setTimeout(function () {

        clearInterval(aviso);

    }, 40000) // 40 SEGUNDOS

}