const vetor = [1, 2, 3]
const vetor2 = [4, 5, 6]

function sum(){
    console.log(arguments)
    console.log(arguments.length)
}

sum(vetor) //length 1
sum(1, 2, 3) //length 3
sum(...[1, 2, 3]) //mostra os valores dentro do array

vetor.push(...vetor2)
console.log(vetor)
