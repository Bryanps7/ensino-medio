let numArray = []

function gravar() {
    for( let i = 0; i < 5 ; i++) {
        numArray.push(i)
    }
    console.table(numArray)

    media()
}

function media() {
    let soma = 0
    for(let i = 0; i < numArray.length;i++) {
        soma += numArray[i]
    }
    
    console.log(soma)
    let media = soma / numArray.length
    console.log(media)
}
gravar()