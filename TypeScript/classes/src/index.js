"use strict";
console.log('_______________');
// class Animal{
//     categoria: string
//     constructor(categoria: string){
//         this.categoria = categoria
//     }
// }
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`Categoria: ${this.categoria}`);
    }
}
class Gato extends Animal {
    constructor(nome) {
        super('mamifero');
        this.nome = nome;
    }
    mostrarDetalhes() {
        console.log(this.nome, this.categoria);
    }
}
class Cachorro extends Animal {
    constructor(_nome) {
        super("mamifero");
        this._nome = _nome;
    }
    get nome() {
        console.log('get chamado');
        return this._nome;
    }
    set nome(n) {
        console.log('set chamado');
        this._nome = n;
    }
    mostrarDetalhes() {
        console.log(this.nome + ' é um ' + this.categoria);
    }
}
// const animal = new Animal('mamifero')
// console.log(animal)
// animal.mostrarCategoria()
// animal.categoria = 'categoria editada fora da classe'
console.log('_______________');
const mingau = new Gato("Mingau");
console.log(mingau);
// mingau.nome = "alterado"
mingau.mostrarDetalhes();
console.log('_______________');
const toto = new Cachorro("Totó");
toto.nome = "novo nome";
console.log('Nome Dog: ', toto.nome);
toto.mostrarDetalhes();
toto.mostrarCategoria();
console.log('_______________');
class Cliente {
    constructor() {
        this._listaAnimais = [];
        this._tempListaAnimais = [];
    }
    adicionarAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._listaAnimais];
    }
}
const mateus = new Cliente();
mateus.adicionarAnimais(toto, mingau);
mateus.listaAnimais.length = 0;
console.log(mateus);
