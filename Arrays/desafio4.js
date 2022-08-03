//Desafio 04: Criar um array que inicie com 5 e termine com 8. Usa shorthand property

let start = 15
let stop = 31
let length = stop - start + 1

const mapFn = (_, index) => start + index
const result = Array.from({length}, mapFn)

console.log(result)