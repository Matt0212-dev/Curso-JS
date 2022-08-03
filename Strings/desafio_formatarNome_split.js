function formatarNome(nome){
    let nomeAsArray = nome.split(' ')  
    if (nomeAsArray.length === 1){
        return nome
    }

    let primeiroNome = nomeAsArray.shift()
    return nomeAsArray.join(' ') + ', ' + primeiroNome

}

console.log(formatarNome('Mateus')) //Mateus
console.log(formatarNome('Mateus Oliveira'))    // Oliveira, Mateus
console.log(formatarNome('Mateus Messias de Oliveira')) // Messias de Oliveira, Mateus
