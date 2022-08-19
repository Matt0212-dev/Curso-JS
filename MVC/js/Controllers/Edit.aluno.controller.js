class EditAlunoController{
    constructor(model, view, service){
        this.model = model
        this.view = view
        this.service = service
        this.view.render(model)
    }
    edit(aluno, nome){
        aluno.nome = nome

        // _id: 0,
        // nome: "chico melato",
        // notas: {
            // portugues: [1, 1, 2, 2],
            // matematica: [2, 2, 2, 2],
            // historia: [5, 5, 5, 5],
            // ciencias: [3, 3, 3, 3],}

        const notas = {}
        const materiasRow = Array.from(this.view.container.querySelectorAll('[data-materia]'))
        console.log(materiasRow)

        materiasRow.forEach(row => {
            const notasRow = Array.from(row.querySelectorAll('[data-bimestre]'))
            console.log(notasRow)

            notas[row.getAttribute('data-materia')] = notasRow.map(nota => parseFloat(nota.value) || 0)
        })

        console.log(notas)

        aluno.notas = notas


        this.service.edit(aluno)
    }
}