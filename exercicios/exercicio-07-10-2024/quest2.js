function setRandomValue(max, min) {
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

function bubbleSort(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            let pos = j + 1
            if (matriz[j] < matriz[pos]) {
                let save = matriz[j]
                matriz[j] = matriz[pos]
                matriz[pos] = save
            }
        }
    }

    return matriz
}

let arrayDisor = []

for (let i = 1; i <= 10; i++) {
    arrayDisor.push(setRandomValue(20,1)) 
}



console.log(arrayDisor)
console.log(bubbleSort(arrayDisor))
