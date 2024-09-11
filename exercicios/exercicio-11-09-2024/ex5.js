let matriz = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
]

let somaP = 0, somaR = 0, somaS = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        matriz[i][j] = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if (i == j) {
            somaP += matriz[i][j]
        } else if (i + j == 4) {
            somaS += matriz[i][j]
        } else {
            somaR += matriz[i][j]
        }
    }
}
console.table(matriz)
console.log("Soma da diagonal Principal: "+somaP);
console.log("Soma da diagonal Secundaria: "+somaS);
console.log("Soma do resto: "+somaR);