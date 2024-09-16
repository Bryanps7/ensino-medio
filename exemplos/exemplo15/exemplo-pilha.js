let pilha = []

function stack(value) {
    for(let i = 0; i < value;i++ ) {
        let value2 = Math.floor(Math.random() * (10 - 1 + 1) + 1)
        pilha.push(value2)
    }
}

function unstack(value) {
    for(let i = 0; i < value;i++ ) {
        pilha.pop()
    }
}

stack(5)
console.log('Empilhando' + 5);
console.table(pilha)
unstack(3)
console.log('Desempilhando ' + 3);
console.table(pilha)
