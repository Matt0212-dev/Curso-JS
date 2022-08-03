const dog = {
    name: 'rex',
    falar: latir    
} 
dog.falar()

function latir(){
    console.log(this.name, 'fala: au au')
}

function miar(){
    console.log(this.name, 'fala: miau')
}

const cat = {
    name: 'Bolota',
    falar: miar
}

cat.falar()