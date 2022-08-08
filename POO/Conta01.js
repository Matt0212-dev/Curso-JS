/* 
1. criar conta abstrata chamada ContaBancaria
    - cliente
    - numero 
    - saldo  
    - depositar(valor)  
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