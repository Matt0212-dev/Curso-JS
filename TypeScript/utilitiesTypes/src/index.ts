//Partial

type Square = {
    x: number,
    y: number,
    width: number,
    heigth: number
}

type PartialSquare = {
    x?: number,
    y?: number,
    width?: number,
    heigth?: number
}

type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    heigth: 200
}

const square2: Partial<Square> = {x: 45}

const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square, {x: 45})
console.log(square)
console.log(square2)
console.log(square3)

//Pick
console.log('=================================================')

type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

//Omit
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    heigth: 300
}

//Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"
type SaturatedColor = Exclude<SquareColor, "black"| "white">

//Extract
type SadColor = "black" | "white" | "gray"
type SadSquareColor = Extract<SquareColor, SadColor>
type HappySquareColor = Exclude<SquareColor, SadColor>

type User = {
    name: string,
    email: string,
    id?: number
}

type UserGet = Required<User>   //Todas as propriedades são OBRIGATORIAS

type UserPatch = Partial<User>  //Todas as propriedades são OPCIONAIS
const maria: UserPatch = {id: 2}


//Readonly
type UserRead = Readonly<User>
const mateus: UserRead = {
    name: 'mateus',
    email: 'mateus@server'
}
// mateus.name = "Mateus Oliveira"   -ERRO-
console.log(mateus)


//NonNullable
type CPF = {cpf: string }
type CNPJ = {cnpj: string }

type User2 = CPF | CNPJ | null | undefined
const user2: NonNullable<User2> = {
    cpf: '064.239.429-60'
}


//Record<T, U>
type Url = {
    url: string
}
type MidiasSociais = "facebook" | "instagram" | "youtube"
const midias: Record<MidiasSociais, Url> = {
    facebook: {url: "facebook.com"},
    instagram: {url: "instagram.com"},
    youtube: {url: "youtube.com"}
}
console.log(midias)


//ConditionalTypes
type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number){

}
myFunction<number>(2)

function myFunction2<T>(param: T){
    return function(param2: T extends number ? boolean : MyString){

    }
}

const minhaFuncao = myFunction2(2)
minhaFuncao(true)


//Never
type NumberOrNever<T> = T extends number ? number : never
const teste: NumberOrNever<number> = 31


//==================================================

//Keyof
type OnePropertyOfSquare = keyof Square     // -> "x" | "y" | "width" | "height"
let onePropertyOfSquare: OnePropertyOfSquare = "x"


//Mapped Types
type Props = "x" | "y" | "z"
// type MappedFromProps = {
//     "x": number,
//     "y": number,
//     "z": number
// }
type MappedFromProps<T extends string | number | symbol> = {
    [P in T]: P
}

type MyMappedTyped = MappedFromProps<Props>

type MappedFromProps2<T> = {
    readonly [P in keyof T]?: T[P]
}
type Teste = MappedFromProps2<{a: boolean, b: "b"}>


//Lookup Types
type BankAcount = {
    id: number,
    name: string,
    count: {
        agency:number,
        code: number,
        digit: number
    }
}

type Id = BankAcount["id"]
type Count = BankAcount["count"]
type Digit = BankAcount["count"]["digit"] 


//Typeof
const myCount: BankAcount = {
    id: 1,
    name: 'mateus',
    count: {
        agency: 2,
        code: 3,
        digit: 4
    }
}
type TypeofMyCount = typeof myCount
type TypeofMyCountId = typeof myCount.id

let minhaString = "ola mundo"
let string2: typeof minhaString