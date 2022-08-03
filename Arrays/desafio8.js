/*
Desafio 08: Seguindo os mesmos passos do exercício anterior, crie os dias da semana em formato longo (domingo) e curto (dom.)

Dicas:
-Observe que na criação da nova data 'new Date(0, 0, 0)' o primeiro argumento é a referencia do ano,
o segundo é o mês e o terceiro, é equivalente ao dia da semana
-(ex anterior) Observe que o objeto do segundo parâmetro da função '.tolocaleString()' está se referindo ao mês 
'month' e precisamos do dia da semana (weekday)
-long ou short?
*/

const mapFn = (_, weekDay) => {
    const date = new Date(0, 0, weekDay)
    return date.toLocaleString('pt-BR', {weekday: 'short'})
}

const result = Array.from({length: 7}, mapFn)
console.log(result)