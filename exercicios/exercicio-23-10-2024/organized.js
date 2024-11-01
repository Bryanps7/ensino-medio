let createArray = document.querySelector('#gerarArray')
let organized = document.querySelector('#organizar')
let invert = document.querySelector('#inverter')

let disarray = []

createArray.addEventListener('click', () => {
    let size = Number(document.querySelector('#tamanho').value)
    console.log(size)

    disarray = setArrayRandom(size, 1, size)
    console.table(disarray)

    let body = document.querySelector('body')
    let dive = document.createElement('div')
    dive.id = 'desorganized'
    body.append(dive)
    document.querySelector('#desorganized').innerHTML = `Array desorganizada: ${disarray}.`
})

function setArrayRandom(max, min, leng) {
    let arrayRandom = []
    for (let i = 0; i < leng; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min)
        arrayRandom.push(random)
    }

    return arrayRandom
}

organized.addEventListener('click', () => {
    let bubble = disarray
    let insert = disarray
    let selection = disarray

    let bubCont = bubbleSort(bubble)
    let insCont = insertSort(insert)
    let selCont = selectionSort(selection)

    let body = document.querySelector('body')
    let dive = document.createElement('div')
    dive.id = 'organized'
    body.append(dive)
    disarray = insert
    document.querySelector('#organized').innerHTML = `
        Array organizada: ${disarray}. <br>
        Contagem de vezes: <br>
        bubbleSort: ${bubCont} | insertionSort: ${insCont} | selectionSort: ${selCont}
    `

})

function bubbleSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let guard = array[j]
                array[j] = array[j + 1]
                array[j + 1] = guard
            }
            cont++
        }
    }
    return cont
}

function insertSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let j = i - 1
        let guard = array[i]
        while (j >= 0 && guard < array[JSON]) {
            array[j + 1] = array[j]
            j--
        }
        cont++
        array[j + 1] = guard
    }
    return cont
}

function selectionSort(array) {
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        let menor = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j
            }
            cont++
        }
        if (i != menor) {
            let guard = array[i]
            array[i] = array[menor]
            array[menor] = guard
        }
    }
    return cont
}

invert.addEventListener('click', () => {
    disarray.reverse()

    let body = document.querySelector('body')
    let dive = document.createElement('div')
    dive.id = 'reverse'
    body.append(dive)
    document.querySelector('#reverse').innerHTML = `Array Reversa: ${disarray}.`
})