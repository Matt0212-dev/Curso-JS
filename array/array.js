let vetor = [5, 4 ,7, 9, 6, 3]

vetor.push(8)
vetor.sort()
vetor.length

console.log(vetor)

// for (let i=0; i < vetor.length; i++){
//     console.log(`O valor da posicao ${i} é ${vetor[i]}`)
// }

for (let i in vetor){
    console.log(`O valor da posicao ${i} é ${vetor[i]}`)
}

//Ele vai procurar pelo VALOR e não pelo indice
console.log(vetor.indexOf(7))

//Quando não encontrar o valor, ele retornará -1
console.log(vetor.indexOf(2))



let pesquisa = vetor.indexOf(7)
if (pesquisa == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor está no índice ${pesquisa}`)
}
