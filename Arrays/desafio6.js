/* 
Desafio 06: Crie um array que tenha em suas posições (os caracteres) de A - Z
-Dicas:
    -Cada caractere de uma String corresponde a um numero. Use 'String.charCodeAt(0)' 
    (sendo 0 a posição inicial da cadeia de String) para pegar o numero de referencia da String desejada
    -É possivel transformar um numero em uma string. Utilize 'String.fromCharCode(<x>)'
    (sendo 'x' o numero de referencia do caractere)
    -utilize a função anterior para criar um intervalo numerico correspondente de A
*/

console.log('A'.charCodeAt(0))
console.log('Z'.charCodeAt(0))

console.log(String.fromCharCode(65))
console.log(String.fromCharCode(90))

function range(start, stop){
    if (stop === undefined){
        stop = start
        start = 1
    }

    let length = stop - start + 1

    const mapFn = (_, index) => start + index
    const result = Array.from({length}, mapFn)

    return result
}

const result = range(65, 90).map(n => String.fromCharCode(n))
console.log(result)