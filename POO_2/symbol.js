const NOME = Symbol()
console.log(typeof NOME)

let n = 0
const user = {
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    ['teste' + (++n)]: 'teste' + n,
    [NOME]: 'Mateus Symbol',
    'nome': 'Mateus String',
    3: 'com string'
}

user.nome = 'nome alterado'
console.log(user)
console.log(user[NOME])
let teste = (Object.getOwnPropertySymbols(user))
console.log(teste[0])
console.log(typeof user[teste[0]])
user[teste[0]] = 'nome alterado2'
console.log(user)