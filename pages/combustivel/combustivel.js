function gastoCombustivel(tempo, velocidade) {
    return (tempo * velocidade) / 12;
}

let gasto1 = gastoCombustivel(10, 85);
let gasto2 = gastoCombustivel(2, 92);
let gasto3 = gastoCombustivel(22, 67);

console.log(`GASTO 1 = ${gasto1.toFixed(3)}`);
console.log(`GASTO 2 = ${gasto2.toFixed(3)}`);
console.log(`GASTO 3 = ${gasto3.toFixed(3)}`);