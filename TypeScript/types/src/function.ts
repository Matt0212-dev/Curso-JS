function add (x: number, y: number): number {
    return x + y
}

const multiply = (x: number, y: number) => {
    return x * y
}

//a primeira parte é só o TIPO da função, recebe 2 numeros e retorna um numero
const subtract: (x: number, y: number) => number = (x, y) => x - y
let teste = subtract(3, 1)


type User = {
    name: string,
    id: number
}

type LevelAdmin = "teacher" | "coordenator" | "manager"

type Admin = {
    isAdmin: true,
    level: LevelAdmin
}

type UserAdmin = User & Admin

let mateus: UserAdmin = {
    name: "mateus",
    id: 0,
    isAdmin: true,
    level: 'teacher'
}

type IsAdmin = (user: User) => boolean

// '!!' converte para booleano
const isAdmin: IsAdmin = (user) => !!(user as UserAdmin).isAdmin
console.log(isAdmin(mateus))

let maria: User = {
    name: "maria",
    id: 1
}

console.log(isAdmin(maria))

export default 2