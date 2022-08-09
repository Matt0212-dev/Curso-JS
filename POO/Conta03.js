/* 
3. criar classe Cliente e compor as classes concretas
    - nome
    - documento
*/

class Cliente{
    constructor(nome, documento){
        this.nome = nome
        this.documento = documento
    }
}

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

class ContaCorrente extends ContaBancaria{
    constructor(nome, numero){
        super(nome, numero)
        this.limite = 0        
    }
    sacar(valor){    
        let disponivel = this.saldo + this.limite    
        if (valor > disponivel){
            throw new Error('Saldo Insuficiente')
        }
        this.saldo -= valor            
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(nome, numero){
        super(nome, numero)
        this.aniversario = Date.now()
    }
    sacar(valor){
        if (valor > this.saldo){
            throw new Error('Saldo Insuficiente')
        }
        this.saldo -= valor
    }
}

const mateus = new Cliente('mateus', 1)
const joao = new Cliente('joao', 2)
const maria = new Cliente('maria', 3)

const cp1 = new ContaPoupanca(mateus, 1)
const cp2 = new ContaPoupanca(joao, 2)
const cc1 = new ContaCorrente(maria, 3)

cp1.depositar(1000)
console.log(cp1)
cc1.limite = 1000
cc1.depositar(2000)
console.log(cc1)
cc1.sacar(3000)
console.log(cc1)