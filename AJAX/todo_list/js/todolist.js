import TasksService from './Service/Tasks.service.js'
import TaskController from './Controller/Task.controller.js'
import TasksView from './View/Tasks.view.js'
  
// const url = "https://jsonplaceholder.typicode.com/todos"

const taskService = new TasksService()

const ul = document.getElementById("todo-list")

const tasksView = new TasksView(ul)

const taskController = new TaskController(taskService, tasksView)

const itemInput = document.getElementById("item-input")
const todoAddForm = document.getElementById("todo-add")

const lis = ul.getElementsByTagName("li")

taskController.getTasks()

todoAddForm.addEventListener("submit", function (e) {
    e.preventDefault()

    taskController.add(itemInput.value)

    itemInput.value = ""
    itemInput.focus()
});


function clickedUl(e) {
    const dataAction = e.target.getAttribute("data-action")
    console.log(e.target)
    if (!dataAction) return

    let currentLi = e.target
    while (currentLi.nodeName !== "LI") {
        currentLi = currentLi.parentElement
    }
    const currentLiIndex = [...lis].indexOf(currentLi)

    const actions = {
        editButton: function () {
            const editContainer = currentLi.querySelector(".editContainer");

            [...ul.querySelectorAll(".editContainer")].forEach(container => {
                container.removeAttribute("style")
            });

            editContainer.style.display = "flex";
        },
        deleteButton: function () {
            // arrInstancesTasks.splice(currentLiIndex, 1)
            // renderTasks()
            taskController.remove(currentLi.getAttribute('data-id'))

        },
        containerEditButton: function () {
            const title = currentLi.querySelector(".editInput").value
            const id = currentLi.getAttribute('data-id')
            // arrInstancesTasks[currentLiIndex].setName(val)
            // renderTasks()
            taskController.update({title, id})
        },
        containerCancelButton: function () {
            currentLi.querySelector(".editContainer").removeAttribute("style")
            currentLi.querySelector(".editInput").value = arrInstancesTasks[currentLiIndex].title
        },
        checkButton: function () {

            // DEVE USAR O MÉTODO toggleDone do objeto correto
            // arrInstancesTasks[currentLiIndex].toggleDone()
            // renderTasks()
            const id = currentLi.getAttribute('data-id')
            taskController.toggleDone(id)
        }
    }

    if (actions[dataAction]) {
        actions[dataAction]()
    }
}

ul.addEventListener("click", clickedUl)
