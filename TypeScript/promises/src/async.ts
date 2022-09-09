import axios from 'axios'
import {ResponseUser} from "./index"

console.log('------------------------')
async function Fn(): Promise<string> {
    return 'string teste'
}

const fn = Fn()
fn.then(n => console.log('valor de n: ' + n))

async function getUser(id: number): Promise<ResponseUser>{
    try{
        const resposta = await axios.get<ResponseUser>('http://localhost:3001/users/' + id)
        console.log(resposta.data.name)
        return resposta.data
    }catch(e){
        throw new Error("Error message: " + e)
    }
   
}
getUser(8).then(dado => {
    console.log('dado')
    console.log(dado)
}).catch(e => {
    console.log('deu ruim')
    console.log(e.message)
})