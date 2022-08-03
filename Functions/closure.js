const teste = (function (n){
    // let n = 0
    return function testeinterno(){
        console.log('teste interno chamado', ++n)
        return 'retorno de teste interno ' + n
    }
})(10)

console.log(teste())
teste()
teste()
console.log(teste())