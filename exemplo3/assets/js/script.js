let res = document.getElementById('res');

function calcularVolume() {
    let raio = Number(document.getElementById('raio').value);
    console.log("| Raio: ",raio);

    let volume = (4/3) * Math.PI * raio**3;

    res.innerHTML = "O valor do Volume é: "+ volume.toFixed(3);
    console.log("| O valor do Volume é: "+ volume.toFixed(3));

}