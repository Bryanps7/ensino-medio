let arrayDisor = [5, 3, 1, 4, 2]

function blubbeSort(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz.length; j++) {
            let pos = j + 1
            let save = 0
    
            if(matriz[j] > matriz[pos]) {
                save = matriz[j]
                matriz[j] = matriz[pos]
                matriz[pos] = save
            }
        }
    }

    return matriz
}

console.table(arrayDisor)
console.table(blubbeSort(arrayDisor))