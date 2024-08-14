let valorMatriz = [
    [1,2,3],
    [3,5,6],
    [7,8,9]
]

console.table(valorMatriz)

valorMatriz[1][1] = 'x'
console.log('===========================')
console.table(valorMatriz)

for(let i = 0 ; i < valorMatriz.length; i++) {
    for(let j = 0 ; j < valorMatriz.length; j++) {
        valorMatriz[i][j] = 1
    }
}

console.log('===========================')
console.table(valorMatriz)