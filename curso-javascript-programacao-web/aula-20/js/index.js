// INPUT QUE RECEBE A TAREFA QUE SERÁ ADICIONADA
let input = document.getElementById('tarefa');
let inputValue = input.value;
let placeholderInput = input.placeholder;

let click = true;
let contador = localStorage.getItem('contador'); // INCREMENTA O ID DAS TAREFAS

// TOTAL DE TAREFAS
let tTarefas = localStorage.getItem('tTarefas');
if (localStorage.getItem('tTarefas') == null) {
    localStorage.setItem('tTarefas', 0);
    localStorage.setItem('tRealizadas', 0);
}
let totalTarefas = document.getElementById('p-total-number');

// TOTAL DE TAREFAS REALIZADAS
let tRealizadas = localStorage.getItem('tRealizadas');
let totalRealizadas = document.getElementById('p-realizadas-number');

// DIV PARA QUANDO NÃO TIVER NENHUM TAREFA OU QUANDO APAGAR TODAS AS TAREFAS
let semTarefas = document.getElementById('sem-tarefas');

// FUNÇÃO PARA ADICIONAR UMA TAREFA ATRAVÉS DO enter
input.onkeyup = enter
function enter(event) {
    if (event.keyCode === 13 || event.which === 13) {
        document.getElementById('btn-addTarefa').click();
    }
}

// FUNÇÃO PARA ADICIONAR UMA TAREFA ATRAVÉS DO button#btn-addTarefa
function addTarefa() {

    inputValue = input.value

    if (inputValue == "" || inputValue == null || inputValue == undefined) {

        if (click == true) {

            /* NÃO DEIXAR ADICIONAR TAREFA ENQUANTO NÃO ACABAR O
            alternarPlaceholder PARA QUE ASSIM NÃO BUG */
            click = false;

            // ADICIONA E REMOVE A CADA 200MS A CLASSE .plecholder-alert
            const alternaPlaceholder = setInterval(function () {

                if (input.classList.contains('placeholder-alert')) {
                    input.classList.remove('placeholder-alert')
                    input.placeholder = placeholderInput;
                } else {
                    input.classList.add('placeholder-alert');
                    input.placeholder = placeholderInput + "!";
                }

            }, 200); // 200MS

            // PARA A const alternarPlaceholder
            setTimeout(function () {
                clearTimeout(alternaPlaceholder);
                click = true;
                input.focus();
            }, 800); // 800MS

        }

    } else {

        /* RETIRA DE CENA A DIV QUE A MENSAGEM QUE AVISA A PESSOA DE QUE ELA
        NÃO TEM NENHUMA TAREFA ADICIONADA */
        semTarefas.style.display = "none";

        /* LIMPA O INPUT DE ADICONAR TAREFAS E JÁ DEIXA ELE EM FOCO PARA NÃO TER 
        QUE CLICAR NOVAMENTE PARA DIGITAR */
        input.value = "";
        input.focus();

        // INCREMENTA O tTarefas PARA MUDAR O TOTAL DE TAREFAS
        tTarefas++;
        totalTarefas.innerHTML = tTarefas;

        // PEGA AS TAREFAS REALIZADAS
        totalRealizadas.innerHTML = tRealizadas + " / " + tTarefas;
        localStorage.setItem('tRealizadas', tRealizadas);
        localStorage.setItem('tTarefas', tTarefas);

        // CONTADOR PARA OS ID'S DAS TAREFAS
        contador++
        localStorage.setItem('contador', contador);

        // GUARDA NO localStorage A TAREFA ADICIONADA NO INPUT
        localStorage.setItem(`tarefa${contador}`, inputValue);

        tarefaLocalStorage(inputValue, contador);

    }

}

// EXECUTA A FUNÇÃO DE RECRIAR AS TAREFAS ADICIONADAS EM CASO DE RELOAD DA PÁGINA
window.addEventListener('load', locStorage);
function locStorage() {

    if (localStorage.getItem('tTarefas') > 0) {
        semTarefas.style.display = "none";
    }

    // ATUALIZA O TOTAL DE TAREFA E O TOTAL DE TAREFAS REALIZADAS
    totalTarefas.innerHTML = localStorage.getItem('tTarefas');
    totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

    /* COMEÇA O LOOP PARA RECRIAR AS TAREFAS, COM BASE NO contador QUE GUARDA 
    O TOTAL DE TAREFAS QUE JA FORAM ADICIONADAS, ELE É DIFERENTE DO tTarefas 
    POIS O tTarefas É O TOTAL DE TAREFAS QUE TEM AGORA, OU SEJA, SE O tTarefas
    FOSSE USADO NO LUGAR DO contador ELE NÃO RECRIARIA TODAS AS TAREFAS
    EX: EU CRIEI 4 TAREFAS E DEPOIS APAGUEI A TAREFA 2 E 3, O tTarefas TERÁ O 
    VALOR 2 E O contador TERÁ O VALOR 4, PORTANTO SE EU USASSE O tTarefas PARA
    RECRIAR AS TAREFAS, SO SERIA RECRIADO A PRIMEIRA TAREFA */
    for (var i = 1; i <= contador; i++) {
        // SE A TAREFA NÃO EXISTIR, NÃO SERÁ CRIADO UMA TAREFA
        if (localStorage.getItem(`tarefa${i}`) != null) {
            tarefaLocalStorage(localStorage.getItem(`tarefa${i}`), i)
        }
    }

}

// RECRIA TODAS AS TAREFAS QUE FORAM ARMAZENADAS
function tarefaLocalStorage(inputValue, id) {

    // PEGA A DIV CONTAINER DAS TAREFAS QUE VÃO SER ADICIONADA
    const containerTarefas = document.getElementById('section-bottom');

    const divTarefaBlock = document.createElement('div');
    divTarefaBlock.id = id;
    divTarefaBlock.className = "tarefa-block";
    containerTarefas.appendChild(divTarefaBlock);

    const inputRealizada = document.createElement('input');
    inputRealizada.type = "checkbox";
    inputRealizada.name = "nrealizada";
    inputRealizada.className = "realizada";
    inputRealizada.addEventListener('change', check)
    divTarefaBlock.appendChild(inputRealizada);

    // MARCA O CHECKBOX
    if (divTarefaBlock.id == localStorage.getItem(`checkbox${id}`)) {
        inputRealizada.checked = true;
    }

    const pTarefaBlockP = document.createElement('p');
    pTarefaBlockP.className = "tarefa-block-p";
    pTarefaBlockP.innerHTML = inputValue;
    divTarefaBlock.appendChild(pTarefaBlockP);

    const buttonDelTarefa = document.createElement('button');
    buttonDelTarefa.addEventListener('click', delTarefa)
    divTarefaBlock.appendChild(buttonDelTarefa);

    const spanIconTrash = document.createElement('span');
    spanIconTrash.className = "material-symbols-outlined icon-trash";
    spanIconTrash.innerHTML = " delete "
    buttonDelTarefa.appendChild(spanIconTrash);

    // FAZ COM QUE A TAREFA SEMPRE ADICIONADA A CIMA DA TAREFA QUE ESTÁ NO TOPO
    const primeiraTarefa = containerTarefas.firstChild;
    containerTarefas.insertBefore(divTarefaBlock, primeiraTarefa);

}

// QUANDO O input:checkbox DA TAREFA É MARCADO
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
        localStorage.removeItem(`checkbox${paiInputSelecionadoId}`)

        /* PEGA O ID DA TAREFA MARCADA E SUBTRAI 1 PARA QUE SEJA POSSÍVEL
        ENCONTRAR A TAREFA QUE VEM DEPOIS DELA, ASSIM CONSEGUINDO VOLTAR
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
    console.log(localStorage.getItem(`tarefa${tarefaBlockId}`))
    localStorage.removeItem(`tarefa${tarefaBlockId}`);

    // ATUALIZA O TOTAL DE TAREFAS REALIZADAS CASO O CHECKBOX TIVER MARCADO QUANDO A TAREFA É APAGADA
    if (tarefaBlockCheckbox.checked) {
        tRealizadas--;
        localStorage.setItem('tRealizadas', tRealizadas);
    }

    // ATUALIZA O VALOR DO TOTAL DE TAREFAS MARCADAS PARA A QUANTIDADE DO TOTAL DE TAREFAS EXISTENTE
    totalRealizadas.innerHTML = localStorage.getItem('tRealizadas') + " / " + localStorage.getItem('tTarefas');

    /* SE TODAS AS TAREFAS FOREM APAGADAS, A DIV QUE MOSTRA A MENSAGEM DE QUE NÃO TEM TAREFAS, APARECE
    E O localStorage É LIMPADO */
    if (localStorage.getItem('tTarefas') == 0) {
        document.getElementById('sem-tarefas').style.display = "block";
        localStorage.clear();
        location.reload();
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
    location.reload();

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