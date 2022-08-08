class Animal{
    
    constructor(tipo){
       if(this.constructor === Animal){
        throw Error('Animal is abstract class')
       }
        if (tipo){
            this.tipo = tipo
        }
    }
    comer(){
        throw Error('method "comer()" must be implemented')
    }
}
class Gato extends Animal{
    constructor(nome){
        super('mamifero')
        this.nome = nome
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
}

const animal = new Animal('mamifero')
const mingau = new Gato('mingau')