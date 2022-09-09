import { createFalse } from "typescript"

console.log('_______________')

function somaOuConcatena(x: number | string, y: number | string){
    return (typeof x === 'number' && typeof y === 'number') ? x + y : x + '' + y
}

console.log(somaOuConcatena(5, 43))
console.log(somaOuConcatena('5', '43'))
console.log(somaOuConcatena('5', 50))


type NumberOrString = number | string
function somaOuConcatenaG<T extends NumberOrString>(x: T, y: T){
    return (typeof x === 'number' && typeof y === 'number') ? x + y : x + '' + y
}

console.log(somaOuConcatenaG(1, 2))
console.log(somaOuConcatenaG('1', '2'))
// console.log(somaOuConcatenaG(1, '2'))    ERRO
// console.log(somaOuConcatenaG(true, false))   ERRO