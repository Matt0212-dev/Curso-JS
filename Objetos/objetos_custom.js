function changeName(name){
    this.name = name
    this.updatedAt = new Date()
}

// const changeName = name => {
//     console.log(name)
//     console.log(this)
// }



const task1 = {
    name: 'task1',
    createdAt:new Date(),
    updatedAt: null,
    completed: false,
    changeName: changeName
}
const task2 = {
    name: 'task2',
    createdAt:new Date(),
    updatedAt: null,
    completed: false,
    changeName
}

task1.name = 'task 1 updated'
task1.updatedAt = new Date()

console.log(task1)
console.log(task2)

task1.changeName('Nome alterado')
task2.changeName('novo nome')

console.log(task1)
console.log(task2)