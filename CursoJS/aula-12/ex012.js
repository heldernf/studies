var agora = new Date()
var hora = agora.getHours()

console.log(`São ${hora} horas.`)

if (hora < 6 && hora >= 0 || hora == 24){
    console.log('Boa Madrugada')
} else if (hora < 12 && hora >= 6) {
    console.log('Bom Dia')
} else if (hora < 18 && hora >= 12) {
    console.log('Boa Tarde')
} else if (hora < 24 && hora >= 18) {
    console.log('Boa Noite')
}