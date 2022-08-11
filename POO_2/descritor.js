const pessoa = {
    nome: 'Mateus'
}

console.log(Object.getOwnPropertyDescriptor(pessoa, 'nome'))
Object.defineProperty(pessoa, 'sobrenome', {
    value: 'Messias de Oliveira',
    enumerable: true,
    configurable: true,
    writable: true
})
Object.defineProperty(pessoa, 'sobrenome', {
    configurable: false
})

Object.defineProperty(pessoa, 'sobrenome', {
    writable: false
})
Object.defineProperty(pessoa, 'sobrenome', {
    prop1: {
        value: 'prop1',
        writable: false
    },
    prop2: {
        writable:false,
        value: 10
    }
})
console.log(Object.getOwnPropertyDescriptor(pessoa, 'sobrenome'))

delete pessoa.sobrenome
for (let i in pessoa){
    console.log(i)
}