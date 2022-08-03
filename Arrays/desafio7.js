/*
Desafio 07: Crie um array de meses do ano, onde cada posição do array corresponderá ao nome do mês

ex.: janeiro, para o mês 0 e dezembro para o mês 11

-Dicas:
    -Utilize 'new Date(0, 0)' para criar o mês de janeiro
    (modifique o segundo argumento para 11 e você criará o mês de dezembro)
    -Utilize o método  'Date.toLocaleString()' para formatar os meses em pt-br
        -Este método receberá 2 argumentos, sendo o primeiro, uma string contendo o local da formatação
        'pt-BR' e o segunco, um objeto que tenha a chave 'month' com o valor 'long'
*/ 
console.log(new Date(2022, 6))

const mapFn = (_, month) => {
    const date = new Date(0, month)
    return date.toLocaleString('pt-BR', {month: 'long'})
}

const result = Array.from({length: 12}, mapFn)
console.log(result)