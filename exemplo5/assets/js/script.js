let res = document.getElementById('res')

function calcularMedia() {
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)    
    let nota3 = Number(document.getElementById('nota3').value)

    console.log("| Nota 1: ",nota1)
    console.log("| Nota 2: ",nota2)
    console.log("| Nota 3: ",nota3)

    let media = (nota1 + nota2 + nota3) / 3

    console.log("| A média das notas é: ",media.toFixed(2))

    res.innerHTML = "A média do Vitor é: "+media.toFixed(2)+"<br>"

    if(media < 7) {
        console.log("| Vitor Ficou de Exame")
        res.innerHTML += "Vitor Ficou de Exame"
    }else if((media > 6)&&(media <= 10)) {
        console.log("| Vitor Alcançou a média")
        res.innerHTML += "Vitor Alcançou a média"
    }else {
        console.log("| Inválido")
        res.innerHTML += "Inválido"
    }
}