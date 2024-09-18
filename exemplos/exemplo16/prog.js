let array = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function setRamdomValue(max, min) {
    let valor = Math.floor(Math.random() * (max = min + 1) + min)
    return valor
}

function setArrayValue() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[i][j] = setRamdomValue(20, 1)
        }
    }
    
    console.table(array)
}

function putInQueue() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            array[i][j] = setRamdomValue(20, 1)
        }
    }

}