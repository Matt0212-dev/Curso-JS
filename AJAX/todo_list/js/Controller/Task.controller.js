import { Task } from "../Model/Task.model.js"

export default class TaskController{
    constructor(service, view){
        this.service = service
        this.view = view
    }
    add(title, userId){
        this.service.add(new Task(title), () => {
            this.view.render(this.service.tasks)
        }, userId)
        // this.service.tasks
        
    }
}