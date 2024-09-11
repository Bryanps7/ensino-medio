function gerarValorAleatorio(max, min) {
    let valor = Math.floor(Math.random() * (max - min + 1) + 0)
    return valor
}

let mat = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]

console.table(mat)

for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        if(i == j) {
            mat[i][j] = 5
        } else {
            mat[i][j] = gerarValorAleatorio(20,0)
        }
    }
}

console.table(mat)

