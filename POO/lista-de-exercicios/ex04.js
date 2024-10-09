class ContaBancaria {
    constructor(titular) {
      this.titular = titular;
      this._saldo = 0; // Atributo protegido com underline
    }
  
    // Método para depositar um valor na conta
    depositar(valor) {
      if (valor > 0) {
        this._saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }
  
    // Método para sacar um valor da conta
    sacar(valor) {
      if (valor > 0 && valor <= this._saldo) {
        this._saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso.`);
      } else {
        console.log("Saldo insuficiente ou valor inválido para saque.");
      }
    }
  
    // Getter para acessar o saldo de forma controlada
    getSaldo() {
      return this._saldo;
    }
  }
  
  // Exemplo de uso
  const minhaConta = new ContaBancaria('João Silva');
  minhaConta.depositar(1000); // Depósito de R$1000 realizado com sucesso.
  minhaConta.sacar(500); // Saque de R$500 realizado com sucesso.
  console.log(`Saldo atual: R$${minhaConta.getSaldo()}`); // Saldo atual: R$500