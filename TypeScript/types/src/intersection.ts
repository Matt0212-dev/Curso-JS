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

export default 1