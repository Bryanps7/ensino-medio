let display = document.querySelector('#display')
function adicionar(value) {

    display.innerHTML += value
}

let calcular = document.querySelector('#igual')

calcular.addEventListener('click', ()=> {
    alert(eval(display.value))
    document.getElementById('display').innerHTML = eval(display.value)
})