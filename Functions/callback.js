const teste = function(cb){
    console.log('funcao teste')
    console.log(cb)
    if(typeof cb === 'function'){
        cb("Passa primeiro a função para o 'teste' e o valor do parametro para a 'cb'")
    }
    } 

const fn = function(p){
    console.log('funcao anonima de callback')
    console.log(p)
}

// fn(30)

teste(fn)