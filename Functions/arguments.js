const soma = function(){
    console.log(arguments)
    let total = 0
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(soma(1, 2, 3, 4, 5, 18, 56))