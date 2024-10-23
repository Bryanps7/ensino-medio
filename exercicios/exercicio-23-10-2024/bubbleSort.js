function setArrayRandom(max, min, tam) {
    let arrayRandom = []
    for(let i = 0; i < tam; i++) {
        let random = Math.floor(Math.random() * (max - min + 1) + min)
        arrayRandom.push(random)
    }

    return arrayRandom
}

let button = document.querySelector('organized')

button.addEventListener('click', ()=>{
    
})