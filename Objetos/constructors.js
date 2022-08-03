function Task(name){

    let _name = name
    // this.name = name
    this.createdAt = new Date()
    this.updatedat = null
    this.changeName = function(newName){
        if(newName){
            _name = newName
            this.updatedat = new Date()
        }  
    }
    this.getName = function(){
        return _name
    }
}

const task1 = new Task('minha tarefa')
task1.changeName('tarefa atualizada')

const task2 = Task('minha segunda tarefa')

console.log(task1.getName())
console.log(task2)
console.log(createdAt)