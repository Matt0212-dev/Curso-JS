let str1 = 'Minha String'
console.log(str1.replace('i', 'o'))
console.log(str1.replace(/i/g, 'o'))
console.log(str1)

console.log(str1.indexOf('string'))
console.log(str1.lastIndexOf('i'))
console.log(str1.lastIndexOf('x')) // se não for encontrado retornará '-1'

// console.log(str1.includes('adsadsads'))
// console.log(str1.includes('minha'))
// console.log(str1.indexOf('minha'))
// console.log(str1.indexOf('minha') >= 0)

console.log(str1.slice(2, 7))
console.log(str1.substring(2, 7))

console.log(str1.slice(-2))
console.log(str1.substring(-2))

console.log(str1.slice(5, 2))
console.log(str1.substring(5, 2))

console.log(str1.toLocaleLowerCase())
console.log(str1.toLocaleUpperCase())

let strAsObj = new String('minha string como objeto')
console.log(strAsObj)
console.log(strAsObj.valueOf())
console.log(strAsObj.toString())

console.log('---------------------------')
//str1 = '          ' + str1 + '            '
str1 = `
     
    teste
         
`
console.log(str1)
console.log('---------------------------')
console.log(str1.trim())
console.log('---------------------------')
console.log(str1.trimEnd())
console.log('---------------------------')
console.log(str1.trimStart())
console.log('---------------------------')
console.log(str1)

console.log('---------------------------')
str1 = '0123456789'
console.log(str1.padStart(20))
console.log(str1.padStart(20,'*'))
console.log(str1.padEnd(20))
console.log(str1.padEnd(20, '|').length)

let telefone1 = '91234-2345' // 9****-**45
let telefone2 = '1234-2345' // 1***-**45
function mascararTelefone(numero){
    let hifemPosicao = numero.indexOf('-')
    let numInicio = numero.slice(0, hifemPosicao)
    let numFinal = numero.slice(hifemPosicao + 1)
    let doisUltimosNums = numFinal.slice(-2)
   
    return `${numInicio[0].padEnd(numInicio.length, '*')}-${doisUltimosNums.padStart(numFinal.length, '*')} `
}
console.log(mascararTelefone(telefone1))
console.log(mascararTelefone(telefone2))

let str2 = 'Hoje é sabado'
console.log(str2.startsWith('oje', 1))
console.log(str2.endsWith('é', 6))

let str3 = 'abcdefgh'
console.log(str3.charAt(1)) // console.log(str3[1])
console.log(str3.charCodeAt(1))
console.log(str3.length)
