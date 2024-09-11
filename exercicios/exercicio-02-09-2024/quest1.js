let array = []
let primo = []
let nPrimo = []
let contador = 0, primos = 0, nPrimos = 0

function random() {
    for (let i = 0; i < 10; i++) {
        let numberRandom = Math.floor(Math.random() * (10 - 0 + 1)) + 0
        array.push(numberRandom)
    }
    console.table(array)
    for (let i = 0; i < array.length; i++) {
        contador = 0
        for (let j = 1; j <= 10; j++) {
            if (array[i] % j == 0) {
                contador++
            }
        }
        if (contador == 2) {
            primo.push(array[i])
        } else {
            nPrimo.push(array[i])
        }
    }
    console.table(primo)
    console.table(nPrimo)

    for(let i = 0; i < primo.length; i ++) {
        primos += primo[i]
    }
    
    for(let i = 0; i < nPrimo.length; i ++) {
        nPrimos += nPrimo[i]
    }

    console.log('Soma dos Primos: '+primos);
    console.log('Soma dos não Primos: '+nPrimos);    
}

random()