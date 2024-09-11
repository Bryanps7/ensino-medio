let tela = document.getElementById('res')
let botao = document.getElementById('calcular')

botao.addEventListener('click', ()=>{
    let altu = Number(document.getElementById('altu').value)    
    let peso = Number(document.getElementById('peso').value)    
    let nome = document.getElementById('nome').value    

    let imc = peso / altu**2
    let dados = ""

    
    if ((imc >= 0 )&&(imc < 17)) {
        dados = "Muito Abaixo do peso"
    } else if((imc >= 17)&&(imc< 18.5)) {
        dados = "Abaixo do peso"
    }else if((imc >= 18.5)&&(imc < 25)) {
        dados = "peso normal"
    }else if((imc >= 25)&&(imc < 30)) {
        dados = "acima do peso"
    }else if((imc >= 30)&&(imc < 35)) {
        dados = "acima do peso | Grau: |"
    }else if((imc >= 35)&&(imc < 40)){
        dados = "acima do peso | Grau: ||"
    }else if(imc > 40){
        dados = "acima do peso | Grau: |||"
    }else{  
        dados = "Inválido"
    }
    tela.innerHTML = "O paciente "+nome+" tem o IMC: "+imc.toFixed(2)+"<br> Estado: "+dados
})