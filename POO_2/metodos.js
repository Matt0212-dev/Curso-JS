const pai = {
    nome: 'pai',
    falar: function(msg){
        console.log(`${this.nome} está falando`)
    }
}

const filho = Object.create(pai, {nome: {value: 'junior', enumerable: true}})

const obj1 = {
    a: 'a',
    b: 'b',
    c: 'c',
}

const obj2 = {
    b: 'b2',
    d: 'd2',
}

// Object.defineProperty(obj2, 'naoEnumeravel', {
//     value: 'nao enumeravel'
// })
Object.defineProperties(obj2,{
    naoEnumeravel: {
        value: 'valor nao enumeravel',
    },
    enumeravel: {
        value: 'valor enumeravel',
        enumerable: true
    }
})

const filha = Object.assign({}, obj1, filho)

const clone = Object.assign({}, obj1, obj2)

const obj3 = {...obj2, ...obj1}
console.log(obj3)
const obj4 = {...obj1, ...obj2}
console.log(obj4)

const obj5 = Object.assign({}, obj2)
console.log(obj5)

obj1.d = 'd'

console.log(Object.keys(obj2))
console.log(Object.values(obj2))
console.log(Object.entries(obj2))

console.log('--------------------------------------------------')

teste = Object.entries(obj2)
console.log(teste)
console.log(teste[0])
console.log(teste[1])
console.log(teste[2])
