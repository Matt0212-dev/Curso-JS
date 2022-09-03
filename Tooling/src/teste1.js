import "core-js/stable"
import axios from "axios"

const teste = 'teste 3'
const arrowFn = n => n * n
console.log(arrowFn(2))

class Teste{
    constructor(n){
        this.n = n
    }
}

console.log(new Teste(5))

const getAdress = async (cep) => {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    try{
        const resposta = await axios.get(url)
        
        const json = resposta.data()
        console.log(json)
        return json
    }catch(e){
        throw e
    }
}

console.log('--------------------------')
getAdress('86125-000').then(data => console.log(data))