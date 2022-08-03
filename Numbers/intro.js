let num = 1234567.890

console.log(num.toFixed(2)) // numero de casas desimais depois da virgula
console.log(typeof num.toFixed(2))

console.log(num.toPrecision(7)) // arredonda o numero de casas decimais
console.log(typeof num.toPrecision(7))

console.log(123 .toPrecision(6))

num = 12.34567
console.log(num.toExponential())
console.log(num.toExponential(4))

//---------------------------------------------------------------

num = 15
console.log(num.toString(2))
console.log(typeof num.toString(2))

console.log((0).toString(2)) // converte para binario
console.log((1).toString(2))
console.log((2).toString(2))
console.log((3).toString(2))
console.log((4).toString(2))

console.log((15).toString(16))  // converte para hexadecimal
console.log((16).toString(16))

num = 123456.789
console.log(num.toLocaleString())
console.log(num.toLocaleString('en-US'))
console.log(num.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))

//---------------------------------------------------------------

console.log(Number.MAX_VALUE, Number.MIN_VALUE)

//---------------------------------------------------------------

let numAsString = 'a3.456'
console.log(isNaN(numAsString))
console.log(numAsString, typeof numAsString, parseFloat(numAsString))

