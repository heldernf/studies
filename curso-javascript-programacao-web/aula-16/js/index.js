var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');

function startContagem() {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";

    cronometro = setInterval(function () {
        var tempoID0 = document.getElementById('tempo0').innerHTML;
        var tempoID1 = document.getElementById('tempo1').innerHTML;
        var tempoID2 = document.getElementById('tempo2').innerHTML;
        var tempoID3 = document.getElementById('tempo3').innerHTML;
        var horas = parseInt(tempoID0);
        var minutos = parseInt(tempoID1);
        var segundos = parseInt(tempoID2);
        var milisegundos = parseInt(tempoID3);

        milisegundos++;

        if (milisegundos == 100) {
            segundos++;
            milisegundos = 0;
        }
        if (segundos == 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos == 60) {
            horas++;
            minutos = 0;
            document.getElementById('tempo0').style.display = "inline-block"
        }

        var horasFormatado = horas.toString().padStart(2, "0");
        var minutosFormatado = minutos.toString().padStart(2, "0");
        var segundosFormatado = segundos.toString().padStart(2, "0");
        var milisegundosFormatado = milisegundos.toString().padStart(2, "0");

        document.getElementById('tempo0').innerHTML = horasFormatado + ":";
        document.getElementById('tempo1').innerHTML = minutosFormatado + ":";
        document.getElementById('tempo2').innerHTML = segundosFormatado + ".";
        document.getElementById('tempo3').innerHTML = milisegundosFormatado;
    }, 10);
}

function stopContagem() {
    clearInterval(cronometro);
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
}

function resetContagem() {
    var tempoID1 = document.getElementById('tempo1');
    var tempoID2 = document.getElementById('tempo2');
    var tempoID3 = document.getElementById('tempo3');
    tempoID1.innerHTML = "00:";
    tempoID2.innerHTML = "00.";
    tempoID3.innerHTML = "00";
    stopContagem();
}