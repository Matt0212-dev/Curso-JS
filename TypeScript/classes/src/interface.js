"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`Categoria: ${this.categoria}`);
    }
}
exports.Animal = Animal;
const laica = {
    categoria: 'mamifero',
    mostrarDetalhes() {
        console.log('teste');
    },
};
class Cachorro {
    constructor(categoria, nome, idade) {
        this.categoria = categoria;
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("detalhes de cachorro");
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : '');
    }
    latir() {
        console.log(this.nome, ' está latindo');
    }
}
class Gato extends Animal {
    constructor(nome, idade) {
        super('mamifero');
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("detalhes");
    }
}
const garfield = new Gato('Garfield', 5);
console.log(garfield);
const tobi = new Cachorro('mamifero', 'Tobi');
console.log(tobi);
tobi.latir();
