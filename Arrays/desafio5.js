/*
Desafio 05: Trasforme o desafio anterior em uma função que irá receber 1 ou 2 argumentos

- A finção sempre irá retornar um array
- Quando receber 1 argumento a função irá retornar de 1 até o numero recebido
- Quando receber 2 argumentos a função irá retornar do primeiro até o segundo argumento
    ex.: fn(4) // [1, 2, 3, 4] | fn(3, 7) // [3, 4, 5, 6, 7]
*/

function range(start, stop){
    if (stop === undefined){
        stop = start
        start = 1
    }

    let length = stop - start + 1

    const mapFn = (_, index) => start + index
    const result = Array.from({length}, mapFn)

    console.log(result)
}
range(3, 7)