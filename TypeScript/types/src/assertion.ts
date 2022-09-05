const teste1 = document.getElementById('teste')! //non-null


const teste = document.getElementById('teste') as HTMLButtonElement

teste.addEventListener('click', (e) => console.log(e))

export {teste} 