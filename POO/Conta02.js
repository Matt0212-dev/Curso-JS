/* 
2. Criar duas classes que herdam de ContaBancaria
- ContaCorrente
    - limite
    - sacar(valor)
    
- ContaPoupanca
    - aniversario
    - sacar(valor)
*/

class ContaBancaria{

    constructor(nome, numero){
        if(this.constructor === ContaBancaria){
            throw Error('ContaBacaria é uma classe abstrata')
        }
        this.nome = nome
        this.numero = numero
        this.saldo = 0
    }
    depositar(valor){
        this.saldo += valor
    }
    sacar(){
        throw Error('metodo sacar() precisa ser implmementado')
    }
}