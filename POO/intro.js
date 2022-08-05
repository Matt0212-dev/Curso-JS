function Animal(tipo){    
    if (tipo){
        this.tipo = tipo
    }
}

let dog = new Animal('mamifero')
let cat = new Animal('mamifero')
let snake = new Animal('reptil')
let fish = new Animal()

// Array.prototype.map.call()
let arr = new Array(1, 2, 3)

Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'

console.log(fish.tipo)



