function doida() {
    let matriz = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]

    for(let i = 0 ; i < matriz.length; i++) {
        for(let j = 0 ; j < matriz.length; j++) {
            if(i == j) {
                matriz[i][j] = 7
            }else {
                matriz[i][j] = 3
            }
        }
    }

    console.table(matriz)
}

doida()