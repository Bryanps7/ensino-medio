let produtos = [
    ['Queijo', 'Minas', '1 KG', 'Não', 'R$ 20,00', 'Unidade', '300', '30 Dias'],
    ['Presunto', 'Perdigão', '1 KG', 'Não', 'R$ 25,00', 'Unidade', '150', '15 Dias'],
    ['Pão', 'Cacetinho', '1 KG', 'Sim', 'R$ 5,00', 'Unidade', '250, 3 Dias'],
    ['Leite', 'Piracanjuba', '1 L', 'Não', 'R$ 4,00', 'Unidade', '60', '7 Dias'],
    ['Cigarro', 'Camel', '20 UN', 'Sim', 'R$ 12,00', 'Pacote', '200',  'Indefinido'],
    ['Maionese', 'Heinz', '500g', 'Não', 'R$ 8,00', 'Unidade', '100', '6 Meses'],
    ['Cerveja', 'Heineken', '350 mL', 'Sim', 'R$ 7,00', 'Lata', '150', '1 Ano'],
    ['Carne', 'Swift', '1 KG', 'Não', 'R$ 40,00', 'Unidade', '250', '10 Dias'],
    ['Maçã', '1 KG', 'Não', 'R$ 6,00', 'Unidade', '52', '15 Dias'],
    ['Alface', 'La Vita', '1 UN', 'Não', 'R$ 3,00', 'Unidade', '5', '5 Dias']
]


window.addEventListener('load', ()=>{
    lala()
})

function lala() {
    let tabela = []
    
    for(let i = 0; i < produtos.length; i++) {
        tabela[i] = produtos[i][0]
    }
    
    document.getElementById("tabela-container").innerHTML = tabela;

    console.table(produtos)
}

function nome(){
    let nome = []
    return
    console.log(`${nome}`)
}
function idade(){
    if(idade<18){
        console.log(`Você não pode comprar produtos como: Cigarro e bebidas alcoólicas!`)
    }
}

function compra() {
    for(let i = 0; i<produtos.length; i++) {
        if(document.getElementById('legal').value == produtos[i][0]) {
            produtos[i][0] = ''
            produtos[i][1] = ''
            produtos[i][2] = ''
            produtos[i][3] = ''
            produtos[i][4] = ''
            produtos[i][5] = ''
            produtos[i][6] = ''
        }
    }

    lala()
}