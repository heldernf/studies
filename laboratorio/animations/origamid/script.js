const inputEmail = document.getElementById('email')
const inputPassword = document.getElementById('password');

const iconOpenEye = document.querySelector('.fa-eye');
iconOpenEye.addEventListener('click', seePassword);

const iconClosedEye = document.querySelector('.fa-eye-slash');
iconClosedEye.addEventListener('click', hidePasswordass);

let btnConnect = document.getElementById('btn-connect');

function seePassword() {
    iconOpenEye.style.display = 'none';
    iconClosedEye.style.display = 'block';

    inputPassword.type = 'text';
}

function hidePasswordass() {
    iconOpenEye.style.display = 'block';
    iconClosedEye.style.display = 'none';

    inputPassword.type ='password';
}

// DEIXA O FORM INBURLÁVEL
setInterval (function() {
    if (inputPassword.value.length < 8) {
        btnConnect.setAttribute('disabled', '');
    } else {
        btnConnect.removeAttribute('disabled');
        inputEmail.setAttribute('required', '');
        inputEmail.type = 'email';
    }
}, 0)

// ANIMAÇÃO DE CARREGAR A PÁGINA
function load() {
    const body = document.querySelector('body')
    const boxLogin = document.getElementById('box-login')
    boxLogin.style.display = 'none'

    const span = document.createElement('span')
    span.id = 'load'
    body.appendChild(span)

    setInterval (function() {
        span.remove();
        boxLogin.style.display = 'block'
    }, 1000)
}