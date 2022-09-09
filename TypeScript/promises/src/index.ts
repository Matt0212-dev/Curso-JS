import axios, { AxiosResponse } from 'axios'

export type ResponseUser = { name: string, id: number, email: string}

axios.get<Array<ResponseUser>>('http://localhost:3001/users').then( (response) => {
    console.log('-----response.data-----')
    const resposta = response.data
    console.log(resposta)
})


const maria: ResponseUser = {name: 'Maria', id: 2, email: "maria@email.com"}

axios.post<ResponseUser>('http://localhost:3001/users', {name: 'Vardumiro', email: "vardumiro@server.com"}).then((response) => { 
    console.log(response.data.id)
})

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get('http://localhost:3001/users/' + id)
}

console.log('GetUser(2)')
getUser(2).then(({data}) => console.log(data.name))