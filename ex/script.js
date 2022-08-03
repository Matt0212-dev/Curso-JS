let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let resultado = document.getElementById('res')
let valores = []

function isNumber (n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inList (n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumber(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }else{
        window.alert('Valor inválido ou ja existente')
    }
    num.value =''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let i in valores){
            soma += valores[i]
            if(valores[i] > maior){
                maior = valores[i]
            }else if (valores[i] < menor){
                menor = valores[i]
            }
        }
        media = soma / total
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} valores adicionados</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        resultado.innerHTML += `<p>A media de todos os valores é ${media}</p>`

    }


}