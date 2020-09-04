export class contaCorrente{
    agencia;
    saldo;
    cliente;
    
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor
        }
    }
    depositar(valor) {
        if(valor > 0) {
            this.saldo += valor
        }
    }
    constructor(agencia, saldo, cliente) {
        this.agencia = agencia
        this.saldo = saldo
        this.cliente = cliente
    }
}