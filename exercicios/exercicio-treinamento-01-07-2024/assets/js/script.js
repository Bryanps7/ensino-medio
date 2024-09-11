let res = document.getElementById(`res`)

//exercicio 1
function pyramid() {
    let comp = Number(document.getElementById(`comp`).value)
    let altu = Number(document.getElementById(`altu`).value)

    let volume = ((comp**2) * altu) / 3

    res.innerHTML = `Volume: `+volume.toFixed(2)
    res.style.marginTop = `10px`
}

//exercicio 2
function pyramid2() {
    let comp = Number(document.getElementById(`comp`).value)
    
    let volume = ((comp**3) * Math.sqrt(2))/12

    res.innerHTML = `Volume: `+volume.toFixed(2)
    res.style.marginTop = `10px`
    
}

//exercicio 3
function fabric() {
    let volDeter = Math.PI * (2.5**2) * 22 

    let porHora = volDeter * 55
    let porDia = porHora * 16
    let noMes = porDia * 30

    res.innerHTML = 'Resposta: '+noMes.toFixed(2)
    res.style.marginTop = `10px`
}

//exercicio 4
function restaurante() {
    let pratos = [1.27, 0.873, 0.792, 0.559, 0.672, 0.714, 0.623]
    let soma = 0, media = 0

    for (let i=0;i<pratos.length;i++) {
        soma += pratos[i]
    }
    media = soma / pratos.length

    mediaH = media * 4
    media3 = mediaH * 3
    mediaDia = media3 * 22
    mediaValor3 = media3 * 14.95
    mediaValorDia = mediaDia * 14.95

    res.innerHTML = 'Resposta: <br>'
    res.innerHTML += 'Valor em 3 horas: R$'+mediaValor3.toFixed(2)+`<br>`
    res.innerHTML += 'Valor em 22 Dias: R$'+mediaValorDia.toFixed(2)+`<br>`
    res.innerHTML += 'Peso no Mês: '+mediaDia.toFixed(3)+`Kg <br>`
    res.style.marginTop = `10px`
}

//exercicio 5
function farenheit() {
    let graus = Number(document.getElementById(`graus`).value)

    let celsius = graus / 33.8 // conversão

    res.innerHTML = celsius.toFixed(3)
}

//exercicio 6
function media7() {
    let nums = []
    for(let i=0;i<7;i++) {
        nums[i] = Number(document.getElementById(`num${i+1}`).value)
        if((nums[i] > 0)&&(nums[i] < 10)) {
            console.log(`Número válido`)
            continue
        } else {
            res.innerHTML = `O número ${nums[i]} é Inválido.`
            break
        }
    }
    let maior6 = 0, menor6 = 0
    let cont1 = 0, cont2 = 0
    let media1 = 0, media2 = 0

    for (let i=0;i<nums.length;i++){
        if(nums[i]>= 6){
            maior6 += nums[i]
            cont1 += 1
        }else{
            menor6 += nums[i]
            cont2 += 1
        }
    }
    media1 = maior6 / cont1
    media2 = menor6 / cont2
        
    res.innerHTML = `A média dos números maiores ou iguais à 6 é: `+media1.toFixed(3)+`<br>`
    res.innerHTML += `A média dos números menores à 6 é: `+media2.toFixed(3)
    
}

//exercicio 7
function myVoto() {
    let nome = document.getElementById(`nome`).value
    let age = Number(document.getElementById(`age`).value)
    let opcao = ``

    if(age<0) {
        opcao = `Impóssivel`
    }else if((age >=0)&&(age < 16)) {
        opcao = `Inválido`
    }else if(((age >= 16)&&(age < 18))||age>=70){
        opcao = `Opcional`
    }else if((age >= 18)&&(age < 70)) {
        opcao = `Obrigatório`
    }

    res.innerHTML = `Nome: ${nome} <br> Opção de voto: ${opcao}`
}

//exercicio 8
function calcularCompra() {
    let aipim = Number(document.getElementById(`aipim`).value)
    let batata = Number(document.getElementById(`batata`).value)
    let cebola = Number(document.getElementById(`cebola`).value)
    let cenoura = Number(document.getElementById(`cenoura`).value)
    let chuchu = Number(document.getElementById(`chuchu`).value)
    let tomate = Number(document.getElementById(`tomate`).value)

    // Tomate -> R$ 5,35; Cebola -> R$ 3,32; Aipim -> R$2,87; Batata inglesa -> R$ 4,43; Cenoura -> R$ 3,59; Chuchu -> R$ 1,79

    let calcAip = 2.87 * aipim
    let calcBat = 4.43 * batata
    let calcCeb = 3.32 * cebola
    let calcCen = 3.59 * cenoura
    let calcChu = 1.79 * chuchu
    let calcTom = 5.35 * tomate

    let compra = calcAip + calcBat + calcCeb + calcCen + calcChu + calcTom

    console.log(compra)

    res.innerHTML = `Total: ${compra}`

}

//exercicio 9
function calculadora() {
    let num1 = Number(document.getElementById(`num1`).value)
    let num2 = Number(document.getElementById(`num2`).value)
    let op = String(document.getElementById(`op`).value)
    let opcao = op.charAt(0)
    let total = 0
    
    if(opcao == `A`) {
        total = num1 + num2
    }else if(opcao == `S`) {
        total = num1 - num2
    }else if(opcao == `D`) {
        total = num1 / num2
    }else if(opcao == `M`) {
        total = num1 * num2
    }else{
        res.innerHTML = `Opção Invalida`
    }

    if(total) {
        res.innerHTML = total
    }
}

//exercicio 10
function mame() {
    let num1 = Number(document.getElementById(`num1`).value)
    let num2 = Number(document.getElementById(`num2`).value)
    let num3 = Number(document.getElementById(`num3`).value)
    let maior = 0, menor = 0;

    if((num1 > num2)&&(num1 > num3)) {
        maior = num1
    }else if((num2 > num1)&&(num2 > num3)){
        maior = num2
    }else if((num3 > num1)&&(num3 > num2)){
        maior = num3
    }

    if((num1 < num2)&&(num1 < num3)) {
        menor = num1
    }else if((num2 < num1)&&(num2 < num3)){
        menor = num2
    }else if((num3 < num1)&&(num3 < num2)){
        menor = num3
    }

    res.innerHTML = `Maior = ${maior} <br>`
    res.innerHTML += `Menor = ${menor}`
}

//exercicio 11
function carros() {
    let cusFab = Number(document.getElementById(`cusFab`).value)
    let perDis = Number(document.getElementById(`perDis`).value)

    let imposto = cusFab * 0.15

    let total = cusFab + imposto + perDis

    res.innerHTML = `R$:${total}`

}

//function 12
function brecho() {
    let valor = Number(document.getElementById(`valor`).value)
    let acrecimo = 0

    if(valor < 50) {
        acrecimo = valor * 0.35
    }else if((valor >= 50)&&(valor < 100)) {
        acrecimo = valor * 0.25
    }else if(valor >= 100) {
        acrecimo = valor * 0.15
    }

    let total = valor + acrecimo

    res.innerHTML = total
}

//function 13
function mensagem() {
    let msm = Number(document.getElementById(`msm`).value)
    let acrecimo75 = 0, acrecimo240 = 0

    if (msm > 75) {
        let resto = msm - 240
        acrecimo75 = (msm - 75) * 0.05
        
        if(msm > 240){
            acrecimo75 = (msm - 75 - resto) * 0.05
            acrecimo240 = (msm-240) * 0.1
        }
    }

    let total = 5 + acrecimo75 + acrecimo240

    res.innerHTML = total
}

//function 14
function vendas() {
    let venda = Number(document.getElementById(`venda`).value)
    let acrecimo = 0


    if( venda < 10000) {
        acrecimo = venda * 0.03
    }else if((venda>=10000)&&(venda<30000)) {
        acrecimo = venda * 0.05
    }else if(venda >= 30000) {
        acrecimo = venda * 0.08
    }

    let salario = venda + acrecimo

    res.innerHTML = `salário: R$${salario}`
}

//function 15
function posto() {
    let comb = String(document.getElementById(`comb`).value)
    let lit = Number(document.getElementById(`lit`).value)
    let acrecimo = 0
    let total = 0
    let combustivel = ``

    if(comb.charAt(0) == `A`) {
        combustivel = `Alcoól`
        if(lit < 20){
            acrecimo = lit * 0.02
        }else {
            acrecimo = lit * 0.04
        }
        total = lit + acrecimo
    }else if(comb.charAt(0) == `G`) {
        combustivel = `Gasolina`
        if(lit < 20){
            acrecimo = lit * 0.03
        }else {
            acrecimo = lit * 0.05
        }
        total = lit + acrecimo
    }else {
        res.innerHTML = `Opção Inválida`
    }


    if(total) {
        res.innerHTML = `Combustivel: ${combustivel} \n Litros: ${lit} \n Valor: R$${total}`
    }

}

res.style.marginTop = `10px`