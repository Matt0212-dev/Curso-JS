function sum(){  
    const arr = []
    // for (let i=0; i< arguments.length; i++){
    //     arr.push(arguments[i])
    // }
    // console.log(arr)

    Array.prototype.forEach.call(arguments, function(argument){
        arr.push(argument)
    })
    return arr.reduce(function (sum, atual){
        return sum + atual
    })  
    
}

let soma = sum(1, 2, 3, 4, 5)
console.log(soma)
// sum.call(null, 1, 2, 3, 4, 5)
// sum.apply(null, [1, 2, 3, 4, 55])

function avarege (){
    // sum.apply(null, [])
    const soma = sum.apply(null, arguments)
    console.log(soma)
    return soma / arguments.length
}
console.log(avarege(1, 2, 3, 4, 5))