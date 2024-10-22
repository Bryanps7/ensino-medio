let num = document.getElementById('num')
let random = document.getElementById('aleatorio')
let container = document.querySelector('.container')
let display = document.createElement('div')
display.setAttribute('id', 'res')
container.appendChild(display)
 

function kaka() {
    document.getElementById('res').innerHTML = "Olá Mundo!"
}

function reload() {
    window.location.reload(true);
}