let tipo =''
const tiposPermitidos = {'mamifero': true, 'anfibio': true, 'reptil': true}
// const tiposPermitidos = ['mamifero', 'anfibio']  *padrão array

const cachorro ={
    name: 'rex',
    get tipo(){
        return tipo
    },
    set tipo(_tipo){
        // if(tiposPermitidos.indexOf(_tipo) >= 0)  *padrão array
        if(tiposPermitidos[_tipo]){
            tipo = _tipo
        }       
    }
}

// IIFE par aevitar sujar escopo global
;(function(){
    let tipo =''
    const tiposPermitidos = {'mamifero': true, 'anfibio': true, 'reptil': true}
    // const tiposPermitidos = ['mamifero', 'anfibio']  *padrão array

    const gato ={
        name: 'rex',
        get tipo(){
            return tipo
        },
        set tipo(_tipo){
            // if(tiposPermitidos.indexOf(_tipo) >= 0)  *padrão array
            if(tiposPermitidos[_tipo]){
                tipo = _tipo
            }       
        }
    }
    this.gato = gato
})()