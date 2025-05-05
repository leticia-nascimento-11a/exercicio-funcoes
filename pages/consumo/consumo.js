function calculoDoConsumo(distancia, combustivel) {
    let consumoMedio = distancia / combustivel
    return `${consumoMedio.toFixed(3)} km/l`
}


let resultado1 = calculoDoConsumo(500, 35.0)
let resultado2 = calculoDoConsumo(2254, 124.4)
let resultado3 = calculoDoConsumo(4554, 464.6)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)