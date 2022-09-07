export abstract class Animal{
    constructor(public readonly categoria: string) { }
    mostrarCategoria(){
        console.log(`Categoria: ${this.categoria}`)
    }

    abstract mostrarDetalhes(): void
    abstract idade: number
}

interface AnimalInterface{
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number;  
}

const laica: AnimalInterface = {
    categoria: 'mamifero',
    mostrarDetalhes(){
        console.log('teste')
    },
}

interface CachorroInterface{
    latir(): void
}

class Cachorro implements AnimalInterface, CachorroInterface{
    constructor(public categoria: string, public readonly nome: string, public idade?: number){

    }
    mostrarDetalhes(){
        console.log("detalhes de cachorro")
        console.log(this.nome, this.categoria, (this.idade) ? this.idade + 1 : '')
    }
    latir(){
        console.log(this.nome, ' está latindo')
    }
}

class Gato extends Animal{
    constructor(public nome: string, public idade: number){
        super('mamifero')
    }

    mostrarDetalhes(): void {
        console.log("detalhes")
        
    }    
}

const garfield = new Gato('Garfield', 5)
console.log(garfield)

const tobi = new Cachorro('mamifero', 'Tobi')
console.log(tobi)

tobi.latir()

interface Pessoa{
    name: string
}

interface Pessoa{
    idade: number
}

const mateus: Pessoa = {
    name: 'mateus',
    idade: 21
}
console.log(mateus)

type TesteT = number | {qtd: number}
const idade: TesteT = {qtd: 10}

type Cores = 'Red' | "Green" | "Blue"
const cor: Cores = 'Red'

//----------------------------------------

type Soma = (x: number, y: number) => number

interface SomaI{
    (x: number, y: number): number
}

const somar: Soma = (x, y) => x + y
console.log(somar(5, 6))