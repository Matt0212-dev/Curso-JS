function formatarNome(nome){
    nome = nome.trim()
    let primeiroEspaco = nome.indexOf(' ')
    if (primeiroEspaco < 0){
        return nome
    }

    let primeiroNome = nome.slice(0, primeiroEspaco)
    let sobrenome = nome.slice(primeiroEspaco + 1)
    return sobrenome + ', ' + primeiroNome
}

console.log(formatarNome('Mateus')) //Mateus
console.log(formatarNome('Mateus Oliveira'))    // Oliveira, Mateus
console.log(formatarNome('Mateus Messias de Oliveira')) //Messias de Oliveira, Mateus

console.log('abc def gh'.split('e'))    //[ 'abc d', 'f gh' ]