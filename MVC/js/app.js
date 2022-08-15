const alunos = [
    {
        _id: 0,
        nome: "chico melato",
        notas: {
            Portugues: [1, 1, 2, 2],
            Matematica: [2, 2, 2, 2],
            Historia: [2, 2, 3, 3],
            Ciencias: [3, 3, 3, 3],
        },
    },
    {
        _id: 1,
        nome: "talita lima",
        notas: {
            Portugues: [4, 4, 4, 4],
            Matematica: [4, 4, 5, 5],
            Historia: [5, 5, 6, 6],
            Ciencias: [7, 7, 8, 9],
        },
    },
];

const alunosService = new AlunosService()

//Calcula a media por materia de cada aluno e cria uma propriedade 'media'
alunos.forEach(aluno => {
   alunosService.add(new AlunoModel(aluno))
});

// //Inserir no thead 'nome' e cada uma das materias
// const htmlHeader = document.createElement('tr')
// htmlHeader.innerHTML = `<td>Nome</td>`

// let htmlHeaderMaterias = Object.keys(alunos[0].notas).map(materia => {
//     // console.log(materia)
//     return `<td>${materia}</td>`
// }).join('');
// // console.log(htmlHeaderMaterias)
// htmlHeader.innerHTML += htmlHeaderMaterias

// document.querySelector('table thead').appendChild(htmlHeader)

// //Percorrer cada aluno e gerar o HTML para incluir no tbody
// function render(){
//     document.querySelector('table tbody').innerHTML = ''
//     alunos.forEach(aluno =>{
//         const htmlBody = document.createElement('tr')
//         let htmlMedias = `<td>${aluno.nome}</td>`
//         Object.keys(aluno.notas).forEach(materia => {
//             htmlMedias +=  `<td>${aluno.media[materia]}</td>`
//         })
//         htmlBody.innerHTML = htmlMedias
//         document.querySelector('table tbody').appendChild(htmlBody)
//     })    
// }
// render()

// //Adicionar aluno
// document.querySelector('form').addEventListener('submit', function(e){
//     e.preventDefault()
//     const nome = document.getElementById('first_name').value
//     console.log(nome)
//     const newAluno = {
//         _id: 0,
//         nome,
//         notas: {
//           Portugues: [1, 1, 2, 2],
//           Matematica: [2, 2, 2, 2],
//           Historia: [2, 2, 3, 3],
//           Ciencias: [3, 3, 3, 3],
//         },
//     }

//     newAluno.media = {}
   
//     for (let materia in newAluno.notas){
//         newAluno.media[materia] = avarege(...newAluno.notas[materia])    
//     }

//     alunos.push(newAluno)
//     render()
// })