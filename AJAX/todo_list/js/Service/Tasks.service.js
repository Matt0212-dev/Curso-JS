const urlUsers = "http://localhost:3000/users"
import { createXMLHttpRequest } from "../createXMLHttpRequest.js"
import { Task } from "../Model/Task.model.js"

export default class TasksService{
    constructor(){
        this.tasks = []
    }
    add(task, cb, userId){
        if(!task instanceof Task){
            throw TypeError('task must be instanceof TaskModel')
        }

        const fn = (_task) => {
            const {title, completed, createdAt, updatedAt} = _task//Extrai as propriedades
            this.tasks.push(new Task(title, completed, createdAt, updatedAt))  
            if(typeof cb === "function") cb() 
        }
        createXMLHttpRequest("POST", `${urlUsers}/${userId}/tasks`, fn, JSON.stringify(task))
        
    }
    // "GET", `${urlUsers}/${userId}/tasks`, init
    getTasks(userId, cb){
        const fn = (arrTasks) => {
            this.tasks = arrTasks.map(task => {
                const { title, completed, createdAt, updatedAt } = task 
                return new Task(title, completed, createdAt, updatedAt)
            })
            cb(this.tasks)
        }
        createXMLHttpRequest("GET", `${urlUsers}/${userId}/tasks`, fn)
    }
}
