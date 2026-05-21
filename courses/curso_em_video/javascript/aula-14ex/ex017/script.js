function contar() {
    let ini = document.getElementById ('txti')
    let fim = document.getElementById ('txtf')
    let passo = document.getElementById ('txtp')
    let res = document.getElementById ('res')
    let h3 = document.getElementById ('h3-res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        h3.innerHTML = 'Impossivel contar, faltam dados! [ERRO 446]'
        h3.style.color = 'red'
        res.innerHTML = ''
    } else {
        h3.innerHTML = 'resultado...'
        h3.style.color = 'white'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            h3.innerHTML = 'Passo inválido, agora passo vale 1. Resultado:'
            p = 1
        }
        if (i < f) {
            // CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}\u{1F449} `
            }
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c-= p) {
                res.innerHTML += `${c}\u{1F449} `               
            }
        }
        res.innerHTML += `\u{1F6A9}FIM\u{1F6A9}`
    }
}