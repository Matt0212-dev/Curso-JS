(function(){
    const nomeUsuario = "Mateus" 
    if (nomeUsuario){
        const topBarElemento = document.createElement("div")
        topBarElemento.className = "top-bar"
        topBarElemento.innerHTML = `<p>Ola, <b>${nomeUsuario}</b> </p>`

        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBarElemento, elementoPai.firstElementChild)
        
    }
})() 