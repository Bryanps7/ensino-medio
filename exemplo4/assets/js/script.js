    let resposta = document.getElementById('res')

    function calcula_volume() {
        let altu = Number(document.getElementById('altu').value)
        let larg = Number(document.getElementById('larg').value)
        let comp = Number(document.getElementById('comp').value)

        console.log("altura" + altu)
        console.log("largura" + larg)
        console.log("comprimento" + comp)

        let vol = altu * larg * comp

        console.log("O valor do paralelepípedo é " + vol + "m³")

        resposta.innerHTML = "O valor do paralelepípedo é "+ vol +"m³"
        resposta.style.color = "White"
        resposta.style.fontSize = "1.25rem"
    }

    function calcula_cilindro() {
        let altu = Number(document.getElementById('altu').value)
        let raio = Number(document.getElementById('raio').value)

        console.log("altura" + altu)
        console.log("Raio" + raio)

        let vol = (raio**2 * Math.PI) * altu

        console.log("O volume do Cílindro é " + vol.toFixed(3) + "m³")

        resposta.innerHTML = "O volume do Cílindro é "+ vol.toFixed(3) +"m³"
        resposta.style.color = "White"
        resposta.style.fontSize = "1.25rem"
    }