let resposta = document.getElementById('resposta')

function verificar() {
    let dia = Number(document.getElementById('dia').value)

    switch(dia){
        case 1:
            resposta.innerHTML = "Seu dia é: Domingo!!"
            console.log("Seu dia é: Domingo!!")
            break;
        case 2:
            resposta.innerHTML = "Seu dia é: Segunda"
            console.log("Seu dia é: Segunda")
            break;
        case 3:
            resposta.innerHTML = "Seu dia é: Terça"
            console.log("Seu dia é: Terça")
            break;
        case 4:
            resposta.innerHTML = "Seu dia é: Quarta"
            console.log("Seu dia é: Quarta")
            break;
        case 5:
            resposta.innerHTML = "Seu dia é: Quinta"
            console.log("Seu dia é: Quinta")
            break;
        case 6:
            resposta.innerHTML = "Seu dia é: Sexta"
            console.log("Seu dia é: Sexta")
            break;
        case 7:
            resposta.innerHTML = "Seu dia é: Sábado"
            console.log("Seu dia é: Sábado")
            break;
        default:
            resposta.innerHTML = "Seu dia é: Inválida"
            console.log("Seu dia é: Inválida")
            break;
    }

}