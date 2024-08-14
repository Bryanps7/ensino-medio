let mIdentidade = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

for (let i = 0; i < mIdentidade.length ; i++) {
    for (let j = 0; j < mIdentidade.length ; j++) {
        if (i == j) {
            mIdentidade[i][j] = 1
        } else {
            mIdentidade[i][j] = 0
        }
    }
}

console.table(mIdentidade)