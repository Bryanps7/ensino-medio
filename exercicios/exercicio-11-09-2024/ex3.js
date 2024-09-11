let matrizI = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

let matrizS = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

let matrizSoma = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]



for (let i = 0; i < matrizI.length; i++) {
    for (let j = 0; j < matrizI.length; j++) {
        if(i==j) {
            matrizI[i][j] = 1
        }
        if(i+j===4) {
            matrizS[i][j] = 1
        }
    }
}


console.table(matrizI)
console.table(matrizS)

for (let i = 0; i < matrizSoma.length; i++) {
    for (let j = 0; j < matrizSoma.length; j++) {
        matrizSoma[i][j] = matrizI[i][j] + matrizS[i][j]
    }
}

console.table(matrizSoma)