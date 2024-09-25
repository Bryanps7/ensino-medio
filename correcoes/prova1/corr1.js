let matriz1 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
let matriz2 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
let matrizSoma = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

function generateMatrizMain(matriz, num) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            if(i == j) {
                matriz[i][j] = num
            }
        }
    }
    console.table(matriz)
    return matriz
}

function generateMatrizSecon(matriz, num) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            if((i+j)===(matriz.length-1)) {
                matriz[i][j] = num
            }
        }
    }
    console.table(matriz)
    return matriz
}

function addMatriz(matrizI, matrizII, matrizAdd) {
    for(let i = 0; i < matrizAdd.length; i++) {
        for(let j = 0; j < matrizAdd.length; j++) {
            matrizAdd[i][j] = matrizI[i][j] + matrizII[i][j]
        }
    }
    console.table(matrizAdd)
}

matriz1 = generateMatrizMain(matriz1, 7)
matriz2 = generateMatrizSecon(matriz2, 5)
addMatriz(matriz1, matriz2, matrizSoma)