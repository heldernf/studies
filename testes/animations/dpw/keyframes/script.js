const btn = document.getElementById('btn')
const carro = document.getElementById('car')

function play() {
    btn.style.backgroundColor = 'red'
    btn.style.color = 'white'

    carro.style.animationName = 'carAnimation'
    carro.style.animationDuration = '15s'
    
    setTimeout (function () {
        carro.style.animationDuration = ''
        carro.style.animationName = ''

        btn.style.backgroundColor = 'white'
        btn.style.color = '#22b14c'
    }, 15000)
}