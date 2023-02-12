function carregar() {
    var msg = document.getElementById('div-msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    if (hora > 0 && hora < 6) {
        img.src = 'img/dawn.jpg'
        document.body.style.background = '#016992'
        msg.innerHTML = `Boa madruga, agora são ${hora} horas.`
    } else if (hora >=6 && hora <12) {
        img.src = 'img/morning.jpg'
        document.body.style.background = '#b06f46'
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
    } else if (hora >= 12 && hora <18) {
        img.src = 'img/afternoon.jpg'
        document.body.style.background = '#ff8805'
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
    } else if (hora >=18 && hora < 24) {
        img.src = 'img/night.jpg'
        document.body.style.background = '#272a31'
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
    }
}