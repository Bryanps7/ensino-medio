let pilha = []
let fila = []

function setRandomValue(max, min) {
    let valor = Math.floor(Math.random() * (max - min + 1) + min)
    return valor
}

for (let i = 0; i < 10; i++) {
    pilha.push(setRandomValue(10, 1))
    fila.push(setRandomValue(10, 1))
}

console.log('Tabela Pilha')
console.table(pilha)
console.log('====================')
console.log('Tabela Fila')
console.table(fila)