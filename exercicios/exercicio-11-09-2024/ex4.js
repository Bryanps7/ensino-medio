let matriz = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        matriz[i][j] = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    }
}

console.table(matriz)