let numArray = []

function valorRandom(max,min) {
    let resultado = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(resultado)
}

function somaValores() {
    let soma = 0
    soma += valorRandom(10, 0)
    console.log(soma)
}

function calcularMedia() {

}