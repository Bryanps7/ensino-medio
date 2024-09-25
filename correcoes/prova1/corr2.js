let matriz = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

let pair = 0, odd = 0

function setRandomValue(max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random
}

for(let i = 0; i < matriz.length; i++) {
    for(let j = 0; j < matriz.length; j++) {
        matriz[i][j] = setRandomValue(20, 1)
    }   
}
console.table(matriz)

function addPairOrOdd(mat, po) {
    let pairOrOdd = 0
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat.length; j++) {
            if(mat[i][j] % 2 == po) {
                pairOrOdd += mat[i][j]
            }
        }   
    }
    return pairOrOdd
}

// 0 = par, 1 = impar
pair = addPairOrOdd(matriz, 0)
odd = addPairOrOdd(matriz, 1)
console.log(`Soma dos números pares: ${pair}`)
console.log(`Soma dos números ímpares: ${odd}`)