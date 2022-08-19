const alunosOld = [
    {
        _id: 0,
        nome: "chico melato",
        notas: {
        portugues: [1, 1, 2, 2],
        matematica: [2, 2, 2, 2],
        historia: [5, 5, 5, 5],
        ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "talita lima",
        notas: {
        portugues: [10, 10, 10, 10],
        matematica: [4, 4, 5, 5],
        historia: [5, 5, 6, 6],
        ciencias: [7, 7, 8, 9],
        },
    },
];

import {AlunosService} from './Services/Alunos.service.js'
import {AlunosView} from './Views/Alunos.view.js'
import {AlunosController} from './Controllers/Alunos.controller.js'
import {MateriasService} from './Services/Materias.service.js'

const alunosService = new AlunosService()

// alunos.forEach(aluno => {
//     alunosService.add(new AlunoModel(aluno))
// })

const alunosView = new AlunosView(
    document.querySelector('[data-table-alunos'),
    new MateriasService().materias)

const alunosController = new AlunosController(alunosService, alunosView)


//Adicionar aluno
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    const nome = document.getElementById('first_name').value
   
    alunosController.add({nome})
})

document.querySelector('#search_name').addEventListener('input', function(){
    const name = this.value
    sessionStorage.setItem('search', name)

    if(name.length > 2 || name.length === 0){
        alunosController.search(name)
    } 
})

const inputEvent = new Event('input')
const inputEventIE = document.createElement('event')
inputEventIE.initEvent('input', true, true)

if(sessionStorage.getItem('serach')){
    document.querySelector('#search_name').value = sessionStorage.getItem('search')
    // document.querySelector('#search_name').dispatchEvent(inputEvent)
    document.querySelector('#search_name').dispatchEvent(inputEventIE)

}