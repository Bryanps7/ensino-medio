let array = []
let par = 0, impar = 0

function gerarAleatorio() {
    for (let i = 0; i < 20; i++) {
        let numberRandom = Math.floor(Math.random() * (10 - 0 + 1)) + 0
        array.push(numberRandom)
    }
    console.table(array)
}

function somar() {
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            par += array[i]
        }else {
            impar += array[i]
        }
    }
}

gerarAleatorio()
somar()

console.log('Pares : '+par);
console.log('Impares : '+impar);
