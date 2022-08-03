const calcular = document.getElementById('calcular')
const nome = document.getElementById('nome').value
const altura = document.getElementById('altura').value
const peso = document.getElementById('peso').value
const resultado = document.getElementById('resultado')

function validate(){
    
}

function calcularIMC(){    
    if (nome !== '' && altura !== '' && peso !== '') {

        const imc = (peso / (altura * altura)).toFixed(1)
        let classificacao = ''
        
        if (imc < 16.9){
            classificacao = 'muito abaixo do peso';
        }else if (imc < 18.4){
            classificacao = 'abaixo do peso';
        }else if (imc < 24.9){
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (imc < 29.9){
            classificacao = 'acima do peso';
        }else if (imc < 34.9){
            classificacao = 'com obesidade grau I';
        }else if (imc < 40){
            classificacao = 'com obesidade grau II';
        }else{
            classificacao = 'com obesidade grau III. Cuidado!!!';
        }

        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`;

    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }
}

calcular.addEventListener('click', () => {

})