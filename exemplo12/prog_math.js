const ler = require('readline-sync')

function leitura() {
    let num1 = ler.question('Digite um numero real: ') 
    let num2 = calcula(num1) // chama a função
    console.log(`Teste chamando função: ${num2}`)
}

function calcula(num1) {
    let numero1 = Math.ceil(num1) //arredonda para cima
    let numero2 = Math.floor(num1) // aredonda para baixo

    console.log(`Número arredonda para cima: ${numero1}`)
    console.log(`Número arredonda para baixo: ${numero2}`)

    return numero1
}

leitura() 