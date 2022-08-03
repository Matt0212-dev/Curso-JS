function calcMedia(){
    console.log(arguments)
    var total = 0
    var media = 0

    for (let i=0; i < arguments.length; i++){
        if (typeof arguments[i] !== 'number'){
            //console.log('Vc deve inserir somente numeros')
            throw Error('only numbers')
        }
        total += arguments[i]        
    }
    if (arguments.length < 1){
        return 0
    }else{
        media = total / arguments.length
        return media
    }
    
}

console.log(calcMedia(1, 2, '3, 4', 5, 6, 7))

// let teste = 20
// console.log(typeof teste)