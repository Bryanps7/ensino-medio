let resposta = document.getElementById('resposta')
let resposta2 = document.getElementById('resposta2')

// exercicio 1
function produto3() {
    let vetor1 = [1, 2, 3, 4, 5]
    let produto = []

    resposta.innerHTML = ''

    for (let i = 0; i < vetor1.length; i++) {
        produto[i] = vetor1[i] * 3
    }

    resposta.innerHTML += produto
}

// exercicio 2
function produtoP() {
    let escalar = Number(document.getElementById('escalar').value)
    let vetor1 = [1, 2, 3, 4, 5]
    let produto = []

    resposta2.innerHTML = ''

    for (let i = 0; i < vetor1.length; i++) {
        produto[i] = vetor1[i] * escalar
    }

    resposta2.innerHTML += produto
}

// exercicio 3
function soma7() {
    let vetor1 = [1, 2, 3, 4, 5]
    let soma = []

    for (let i = 0; i < vetor1.length; i++) {
        soma[i] = vetor1[i] + 7
    }

    resposta.innerHTML = soma
}

// exercicio 4
function somaP() {
    let vetor1 = [1, 2, 3, 4, 5]
    let soma = []

    for (let i = 0; vetor1.length; i++) {
        soma[i] = vetor1[i] + document.getElementById(`num${i + 1}`)
    }

    resposta2.innerHTML = soma
}

// exercicio 5
function somaVetor() {
    let soma = []

    for (let i = 0; i < 5; i++) {
        soma[i] = Number(document.getElementById(`num${i + 1}v1`).value) + Number(document.getElementById(`num${i + 1}v2`).value)
    }

    resposta.innerHTML = soma
}

// exercicio 6
function subVetor() {
    let sub = []

    for (let i = 0; i < 5; i++) {
        sub[i] = Number(document.getElementById(`num${i + 1}v1`).value) - Number(document.getElementById(`num${i + 1}v2`).value)
    }

    resposta.innerHTML = sub
}

// exercicio 7
function somaIntVetor() {
    let vetor = []
    let soma = 0

    for (let i = 1; i <= 7; i++) {
        vetor.push(Number(document.getElementById(`num${i}`).value))
    }

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    resposta.innerHTML = soma
}

// exercicio 8 
function inverter() {
    let vetor = []
    
    for (let i = 1; i <= 5; i++) {
        vetor.push(Number(document.getElementById(`num${i}`).value))
    }

    resposta.innerHTML = vetor.reverse()
}