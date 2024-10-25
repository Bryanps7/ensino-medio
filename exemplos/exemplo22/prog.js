let calcular = document.getElementById('#calcular')

calcular.addEventListener('click', ()=>{
    let pagin = querySelector('body')

    let btnSoma = document.createElement('button')
    pagin.appendChild(btnSoma)
    btnSoma.style.backgroundColor = 'black'
    btnSoma.style.color = 'white'
    btnSoma.style.fontSize = '2rem'
    btnSoma.style.fontWeight = 'bold'
    btnSoma.textContent = '+'
    btnSoma.setAttribute('id','soma')
    console.log(btnSoma)


    let btnSub = document.createElement('button')
    pagin.appendChild(btnSoma)
    btnSoma.style.backgroundColor = 'black'
    btnSoma.style.color = 'white'
    btnSoma.style.fontSize = '2rem'
    btnSoma.style.fontWeight = 'bold'
    btnSoma.textContent = '-'
    btnSoma.setAttribute('id','soma')
    console.log(btnSoma)


})