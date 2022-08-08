if(!String.prototype.replaceAll){
    String.prototype.replaceAll = function(busca, troca){
        console.log(this)
        console.log(this.valueOf())

        if(busca instanceof RegExp){
            throw Error('first parameter must be a string')
        }
        if(troca instanceof RegExp){
            throw Error('first parameter must be a string')
        }

        return this.valueOf().split(busca).join(troca)
    }
}