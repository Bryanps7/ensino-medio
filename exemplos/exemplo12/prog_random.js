// Math.floor(Math.random() * (max - min + 1)) + min => fórmula do aleatório entre 2 valores inclusive

const readlineSync = require('readline-sync')

let numArray = []

function gerar_num_aleatorio(num) {
    let valor = Math.floor(Math.random() * (num - 0 + 1)) + 0

    return(valor)
}

function gravar() {
    console.log('| Digite apenas numeros Inteiros')
    let num1 = readlineSync.question('Digite a quantidade de numeros aleatorios: ')

    for(let i = 0; i < num1; i++ ){
        numArray.push(gerar_num_aleatorio(i+1))
    }
    console.table(numArray)
}

gravar()