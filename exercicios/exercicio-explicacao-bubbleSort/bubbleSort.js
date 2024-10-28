function setArrayRandom(max, min, leng) {
    let arrayRan = []
    for(let i = 0; i < leng-1; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min)
        arrayRan.push(random)
    }
    return arrayRan
}

let disarray = setArrayRandom(10, 1, 10)

console.log(disarray)

function bubbleSort(array) {
    for(let i = 0 ; i < array.length; i++) {
        for(let j = 0 ; j < array.length; j++) {
            if(array[j] > array[j+1]) {
                let guard = array[j]
                array[j] = array[j+1]
                array[j+1] = guard
            }
        }
    }
}

bubbleSort(disarray)
console.log(disarray)
