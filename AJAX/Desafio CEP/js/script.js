const _cep = document.querySelector('#inputCEP')
_cep.addEventListener('input', function(e){
    let cep = this.value
    cep = cep.replace('-', '')
    if(cep.length >= 8){
        const promise = obterEndereco(cep)
            .then(dado => {
                console.log('sucesso')
                if(dado.erro) throw Error('CEP Inexistente')
                mostrarEndereco(dado)
            })
            .catch(err => {
                mostrarErro(err.message)
            })
    }
})

async function obterEndereco(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`
    
    try{
        const resposta = await fetch(url)
        console.log(resposta)
        if(!resposta.ok) throw Error('CEP invalido')
    
        const json = await resposta.json()
        console.log(json)
        return json
    }catch(err){
        throw Error('Algo deu errado no servidor')
    }  
}

function mostrarEndereco({logradouro, bairro, localidade, uf}){
    document.querySelector('#inputLogradouro').value = logradouro
    document.querySelector('#inputBairro').value = bairro
    document.querySelector('#inputCidade').value = localidade
    document.querySelector('#inputEstado').value = uf
}

function mostrarErro(erro){
    document.querySelector("#bs-feedback .content").textContent = erro
    document.querySelector("#bs-feedback").style.transform = "translateY(0)"
}

document.querySelector("#bs-feedback .close").addEventListener("click",  esconderErro)

function esconderErro(){
    document.querySelector("#bs-feedback").removeAttribute('style')
}