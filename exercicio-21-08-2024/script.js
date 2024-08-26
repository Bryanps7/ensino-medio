let res = document.getElementById("res")
res.style.color = 'white'
res.style.fontWeight = 'bold'

// ex 1
let array1 = []

function guarda1(){
    for(let i = 1; i < 6; i++) {
        array1.push(Number(document.getElementById(`num${i}`).value))
    }
}

function calc1() {
    let soma = 0, media = 0
    
    for(let i = 0; i < array1.length; i++) {
        soma += array1[i]
    }

    media = soma / array1.length

    res.innerHTML = `Média : ${media}`
}

// ex 2
let array2 = []

function gerar2() {
    array2 = []

    for(let i = 1; i < 6; i++) {
        array2.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
    }
}

function media2() {
    let soma = 0 , media = 0
    
    for(let i = 0; i < array2.length; i++) {
        soma += array2[i]
    }

    media = soma / array2.length
    
    res.innerHTML = `Média : ${media}`
}

// ex 3
let array3 = []

function gerar3() {
    array3 = []

    for(let i = 1; i < 6; i++) {
        array3.push(Math.floor(Math.random() * (10 - 1 + 1)) + 1)
    }
}

function soma3() {
    let par = 0 , impar = 0

    for(let i = 0; i < array3.length; i++) {
        if(array3[i] % 2 == 0) {
            par += array3[i]
        } else {
            impar += array3[i]
        }
    }

    res.innerHTML = `Par : ${par} <br> Ímpar : ${impar}`
} 

// ex 4