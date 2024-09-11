let vetor = [1, 2, 3, 4, 5]

console.log("Dados do vetor: " + vetor)

console.log("Tamanho do vetor: " + vetor.length)

for (let i = 0; i < vetor.length; i++) {
    console.log(`Produto ${i}: ${vetor[i]}`)
}

console.table(vetor)