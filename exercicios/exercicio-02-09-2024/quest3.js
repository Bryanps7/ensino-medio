function matriz() {
    let matriz = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]
    
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            let soma = i + j
            if(soma == 3) {
                console.log('Olá' + soma);
                matriz[i][j] = 1
                console.table(matriz)
            }       
        }
    }
}
matriz()