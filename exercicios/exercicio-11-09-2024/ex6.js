let matriz = [
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
]

let par = 0

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        matriz[i][j] = Math.floor(Math.random() * (10 - 1 + 1) + 1)
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
        if(matriz[i][j] % 2 == 0){
            par += matriz[i][j]
        }
    }
}

console.table(matriz)
console.log("Soma dos pares: "+par)