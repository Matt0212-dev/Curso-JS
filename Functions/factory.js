function createDog(name){
    let posicao = 0
    return {
        name,
        latir(){
            console.log(this.name, 'está latindo')
        },
        andar(distancia){
            posicao += distancia
            console.log(this.name, 'andou', distancia, 'm')
        },
        get posicao(){
            console.log(`A posicao de ${this.name} é ${posicao}`)
            return posicao
        }
    }
}

const rex = createDog('Rex')
rex.andar(10)
rex.andar(5)

console.log('rex.posicao')
console.log(rex.posicao)
console.log(rex)

const toto = createDog('Totó')
toto.andar(5)
toto.andar(7)
// toto.posicao()
console.log(toto)