let res = document.getElementById('res')
let res2 = document.getElementById('res2')

res.style.color = "black";
res.style.marginTop = "5px";
res.style.width = "75%";
res.style.backgroundColor = "white";
res.style.borderRadius = "8px";
res.style.padding = "3px";

res2.style.color = "black";
res2.style.marginTop = "5px";
res2.style.width = "75%";
res2.style.backgroundColor = "white";
res2.style.borderRadius = "8px";
res2.style.padding = "3px";
// Exercício 1
function piramide() {
    let comp = Number(document.getElementById('comp').value)
    let altu = Number(document.getElementById('altu').value)

    console.log("| Comprimento: ",comp)
    console.log("| Altura: ",altu)

    let volPiramide = ((comp*comp) * altu)/3

    console.log("| Volume: ",volPiramide)
    res.innerHTML = "Volume: "+volPiramide.toFixed(3)

}

// Exercício 2
function mmps() {
    let mmHg = Number(document.getElementById('mmHg').value)
    const vPSI = 0.0193367801

    console.log("| mmHg: ",mmHg)

    let converter = mmHg * vPSI

    console.log("| Conversão: ",converter)
    res.innerHTML = "Conversão: "+converter.toFixed(3)

}
function psmm() {
    let PSI = Number(document.getElementById('PSI').value)
    const vPSI = 0.193367801

    console.log("| PSI: ",PSI)

    let converter = PSI / vPSI

    console.log("| Conversão: ",converter)
    res2.innerHTML = "Conversão: "+converter.toFixed(3)

}

// Exercício 3
function face() {
    let fare = Number(document.getElementById('fare').value)
    const vFare = 33.8

    console.log("| Farenheit: ",fare)

    let converter = fare / vFare

    console.log("| Conversão: ",converter)
    res.innerHTML = "Conversão: "+converter.toFixed(3)

}
function cefa() {
    let cels = Number(document.getElementById('cels').value)
    const vFare = 33.8

    console.log("| Celsius: ",cels)

    let converter = cels * vFare

    console.log("| Conversão: ",converter)
    res2.innerHTML = "Conversão: "+converter.toFixed(3)

}

// Exercício 4
function calcIdade() {
    let nome = document.getElementById('nome').value
    let idade = Number(document.getElementById('idade').value)
    
    console.log("| Nome: ",nome)
    console.log("| Idade: ",idade)

    res.innerHTML = "Nome: "+nome+"<br>"
    if( idade < 0){
        console.log("| Voto Inválido")
        res.innerHTML += "Voto Inválido"
    }else if(idade < 16) {    
        console.log("| Voto Negado")
        res.innerHTML += "Voto Negado"
    }else if(((idade >= 16)&&(idade < 18))||(idade >= 60)) {
        console.log("| Voto Opcional")
        res.innerHTML+= "Voto Opcional"
    }else if((idade >= 18)&&(idade < 60)) {
        console.log("| Voto Obrigatório")
        res.innerHTML += "Voto Obrigatório"
    }
}

// Exercício 5
function maiorEMenor() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)
    
    let maior = 0
    let menor = 0
    let contar = 0

    for(let j=0;j<num.length;j++){
        contar = 0
        for(let i=0;i<num.length;i++) {
            if(num[j] >= num[i]){
                contar += 1
            }
        }
        if(contar > 4) {
            maior = num[j]
        }else if(contar <= 1) {
            menor = num[j]
        }
    }

    console.log("| Maior número: ",maior)
    console.log("| Menor Número: ",menor)

    res.innerHTML = "Maior Número: "+maior+"<br>"+
                    "Menor Número: "+menor
}

// Exercício 6
function somas() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let somaPar = 0
    let somaImpar = 0

    for(let i=0;i<num.length;i++) {
        if(num[i] % 2 == 0){
            somaPar += num[i]
        }else if(num[i] % 2 == 1){
            somaImpar += num[i]
        }
    }

    res.innerHTML = "Soma dos Pares: "+somaPar+"<br>"+
                    "Soma dos Impares: "+somaImpar
}

// Exercício 7
function div7() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let div7 = 0

    for(let i=0;i<num.length;i++) {
        if(num[i] % 7 == 0){
            div7 += 1
        }
    }

    res.innerHTML = "Quantidade: "+div7
}

// Exercício 7
function div35() {
    let num = []
    
    num[1] = Number(document.getElementById(`num1`).value)
    num[2] = Number(document.getElementById(`num2`).value)
    num[3] = Number(document.getElementById(`num3`).value)
    num[4] = Number(document.getElementById(`num4`).value)
    num[5] = Number(document.getElementById(`num5`).value)

    let div3 = 0
    let div5 = 0
    let div35 = 0

    for(let i=0;i<num.length;i++) {
        if((num[i] % 3 == 0)&&(num[i] % 5 == 0)){
            div35 += 1
        }
        if(num[i] % 3 == 0){
            div3 += 1
        }
        if(num[i] % 5 == 0){
            div5 += 1
        }
    }
    res.innerHTML = "Divisiveis por 3: "+div3+"<br>"
    res.innerHTML += "Divisiveis por 5: "+div5+"<br>"
    res.innerHTML += "Divisiveis por 3 e 5: "+div35
} 