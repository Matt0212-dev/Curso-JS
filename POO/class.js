//ES5
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


//ES6
class AnimalC{
    constructor(tipo){
        if (tipo){
            this.tipo = tipo
        }
        
    }
    obterTipo(){
        return this.tipo
    }

    testeProto = 'será que funciona'
}

AnimalC.prototype.tipo = 'desconhecido'

let animal = new AnimalC('Anfibio')
let sapo = new AnimalC()
// console.log(animal)
// console.log(cat)
// console.log(typeof animal)
// console.log(typeof cat)
// console.log(typeof Animal)
// console.log(typeof AnimalC)
// console.log(animal.obterTipo())
// console.log(cat.obterTipo())
console.log(Animal.prototype)
console.log(AnimalC.prototype)


