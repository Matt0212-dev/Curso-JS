let calc = (function (){
    let n = 0

    function checkNumber(n){
        if (typeof n !== 'number'){
            throw Error ('Somente Numeros')
        }
    }
    
    
    function somar(_n){
        checkNumber(_n)
        n += _n
        return this
    }

    function subtrair(_n){
        checkNumber(_n)
        n -= _n
        return this
    }

    function log(){      
        console.log(n)
        return this
    }
    return {
        somar, 
        subtrair,
        log
    }
})()

calc.somar(5).somar(17).subtrair(3).log()
// calc.log()