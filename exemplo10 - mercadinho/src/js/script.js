let resposta = document.getElementById('resposta')
let prod_array = []
let quant_array = []
let parcial_array = []

function gravar() {
    let quantidade = Number(document.getElementById('qt').value)
    let produto = document.getElementById('nm').value
    
    quant_array.push(quantidade)
    prod_array.push(produto)
    
    console.table(quant_array)
    console.table(prod_array)

}

function somar(){
    for(let i=0;i< prod_array.length; i++) {
        parcial_array[i] - quant_array[i] + preco[i]
    }
    console.table(parcial_array)

    for(let i = 0; i < parcial_array.length; i++) {
        total += parcial_array[i]
    }

    console.log(total)
}