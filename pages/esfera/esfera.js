function volumeEsfera(raio) {
    let pi = 3.14159
    return (4.0 / 3) * pi * Math.pow(raio, 3)
}

function mostrarVolume(raio) {
    let volume = volumeEsfera(raio)
    return `VOLUME = ${volume.toFixed(3)}`
}

let resultado1 = mostrarVolume(3)
let resultado2 = mostrarVolume(15)
let resultado3 = mostrarVolume(1523)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)