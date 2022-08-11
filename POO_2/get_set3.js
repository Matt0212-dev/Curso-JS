/*
Desafio
    Crie um objeto pessoa
    Deve ter uma propriedade get chamada usuarios que deve armazenar uma array de strings
    Deve ter uma propriedade get chamada usuario que deve retornar o ultimo usuario da array
    Sempre q alterar o usuario (set), não deve substituir , mas sim colocar num array, se ja não existir na array usuarios
    Deve ter uma propriedade get usuarios para recuperar o historico de usuarios
*/
;(function(){
    let usuarios = []
    this.pessoa ={
        get usuario(){
            if(usuarios.length){
                return usuarios[usuarios.length -1]
            }
        },
        set usuario(_usuario){
            if(!usuarios.includes(_usuario)) {
                usuarios.push(_usuario)
            }        
        },
        get usuarios(){
            return usuarios
        }
    }
})()