let paginCss = document.querySelector('body').style
paginCss.backgroundColor = '#333'
paginCss.display = 'flex'
paginCss.justifyContent = 'center'
paginCss.alignItems = 'center'
paginCss.margin = '0'
paginCss.height = '100vh'



let principal = document.querySelector('#principal')
principal.style.backgroundColor = 'brown'
window.addEventListener('load', () => {
    if(window.innerWidth >= 900) {
        principal.style.width = '50vw'
    } else {
        principal.style.width = '90vw'
    }
})

window.addEventListener('resize', ()=> {
    if(window.innerWidth >= 900) {
        principal.style.width = '50vw'
    } else {
        principal.style.width = '90vw'
    }
})
principal.style.height = '200px'
principal.style.display = 'flex'
principal.style.padding = '10px'
principal.style.justifyContent = 'center'
principal.style.alignItems = 'center'
principal.style.flexDirection = 'column'
principal.style.margin = '0'

let rotulo = document.createElement('label')
rotulo.textContent = 'Digite um valor: '
rotulo.style.fontWeight = 'bold'
principal.appendChild(rotulo)

let linha = document.createElement('br')
principal.appendChild(linha)

let entradaDados = document.createElement('input')
entradaDados.style.borderRadius = '0'
entradaDados.style.border = '0'
entradaDados.style.outline = '0'
entradaDados.style.padding = '5px'
entradaDados.type = 'text'
entradaDados.placeholder = 'valor'
principal.appendChild(entradaDados)

principal.appendChild(linha)