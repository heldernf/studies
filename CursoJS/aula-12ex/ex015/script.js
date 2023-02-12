function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/h-bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/h-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/h-adulto.png')
            } else {
                img.setAttribute('src', 'img/h-velho.png')          
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/m-bebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/m-jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/m-adulto.png')
            } else {
                img.setAttribute('src', 'img/m-velha.png')          
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}