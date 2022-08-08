//Factories
const CachorroProto = {
    latir(){
        console.log(`${this.name} está latindo`)
    },
    andar(distancia){
        this.posicao += distancia
        console.log(this.name, 'andou ', distancia, 'm')
    },
}

function criarCachorro(name){
    let posicao = 0

    const obj = {
        name,       
        get posicao(){
            console.log(`a posicao atual de ${this.name} é ${posicao}`)
            return posicao
        } ,
        
        set posicao(newPosition){            
            posicao = newPosition
            console.log(`a nova posicao de ${this.name} é ${newPosition}`)
        }
    }
    Object.setPrototypeOf(obj, CachorroProto)   

    return obj    
}


let dog1 = criarCachorro('dog1')
let dog2 = criarCachorro('dog2')

//ES5
function Animal(tipo){    
    if(this instanceof Animal){
        if (tipo){
            this.tipo = tipo
        }
    }else{
        throw new Error('Animal must be created with new operator')
    }
    
}

// let dog = new Animal('mamifero')
// let cat = new Animal('mamifero')
// let snake = new Animal('reptil')
// let fish = new Animal()

// Array.prototype.map.call()
// let arr = new Array(1, 2, 3)

function Dog(nome){
    this.nome = nome
    Animal.call(this, 'Mamifero')
    // this.constructor = Dog
    this.comer = function(){
        console.log(`${this.nome} está comendo`)
    }
}

Dog.prototype = new Animal()
Dog.prototype.latir = function(){
    console.log(`${this.nome} está latindo`)
}
Dog.prototype.constructor = Dog

let dog = new Dog('Cachorro')

Animal.prototype.obterTipo = function(){
    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'

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

class GatoC extends AnimalC{    
    constructor(nome){
        super('mamifero')
        this.nome = nome
        this.comer = function(){
            console.log(`${this.nome} está comendo`)
        }
    }
}

AnimalC.prototype.tipo = 'desconhecido'

// let animal = new AnimalC('Anfibio')
// let sapo = new AnimalC()
// console.log(animal)
// console.log(cat)
// console.log(typeof animal)
// console.log(typeof cat)
// console.log(typeof Animal)
// console.log(typeof AnimalC)
// console.log(animal.obterTipo())
// console.log(cat.obterTipo())
// console.log(Animal.prototype)
// console.log(AnimalC.prototype)

let mingau = new GatoC('mingau')
console.log(mingau)
console.log(dog)
