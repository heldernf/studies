var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');

function startContagem() {
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";

    cronometro = setInterval(function () {
        var tempoID0 = document.getElementById('horas').innerHTML;
        var tempoID1 = document.getElementById('minutos').innerHTML;
        var tempoID2 = document.getElementById('segundos').innerHTML;
        var tempoID3 = document.getElementById('miliSegundos').innerHTML;
        var horas = parseInt(tempoID0);
        var minutos = parseInt(tempoID1);
        var segundos = parseInt(tempoID2);
        var milisegundos = parseInt(tempoID3);

        milisegundos++;
        var milisegundosFormatado = milisegundos.toString().padStart(2, "0");
        document.getElementById('miliSegundos').innerHTML = milisegundosFormatado;

        if (milisegundos == 100) { // SEGUNDOS
            segundos++;
            document.getElementById('miliSegundos').innerHTML = "00"; // ZERA OS MILISEGUNDOS

            var segundosFormatado = segundos.toString().padStart(2, "0");
            document.getElementById('segundos').innerHTML = segundosFormatado + ".";

            if (segundos == 60) { // MINUTOS
                minutos++;

                document.getElementById('segundos').innerHTML = "00."; // ZERA OS SEGUNDOS

                var minutosFormatado = minutos.toString().padStart(2, "0");
                document.getElementById('minutos').innerHTML = minutosFormatado + ":";

                if (minutos == 60) { // HORAS
                    horas++;

                    document.getElementById('minutos').innerHTML = "00:"; // ZERA OS MINUTOS

                    if (horas == 1) {
                        document.getElementById('horas').style.display = "inline-block"
                    }
                    var horasFormatado = horas.toString().padStart(2, "0");
                    document.getElementById('horas').innerHTML = horasFormatado + ":";
                }
            }
        }
    }, 10);
}

function stopContagem() {
    clearInterval(cronometro);
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
}

function resetContagem() {
    var tempoID0 = document.getElementById('horas');
    var tempoID1 = document.getElementById('minutos');
    var tempoID2 = document.getElementById('segundos');
    var tempoID3 = document.getElementById('miliSegundos');
    tempoID0.removeAttribute('style');
    tempoID0.innerHTML = "00:";
    tempoID1.innerHTML = "00:";
    tempoID2.innerHTML = "00.";
    tempoID3.innerHTML = "00";
    stopContagem();
}