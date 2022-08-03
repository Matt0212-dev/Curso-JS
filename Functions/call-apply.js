// var name = 'Mateus'

function teste(str, n){
    console.log(this.name)
    console.log(str, n)
}

teste.call({name: 'Mateus'}, 'jaguara', 21)
teste.apply({name: 'João'}, ['da Silva', 31])
teste.call({name: 'João'}, ...['da Silva', 31])

const teste2 = teste.bind({name: "Jurema"})
teste2('Doroteia', 60)
teste2('Clotilde', 50)

document.addEventListener('click', teste2)