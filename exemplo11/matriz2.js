let valMatriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let valMatriz2 = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

for (let i = 0; i < valMatriz.length; i++) {
    for (let j = 0; j < valMatriz.length; j++) {
        valMatriz2[i][j] = valMatriz[i][j] + 1
    }
}