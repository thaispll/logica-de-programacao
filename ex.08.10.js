// Classe ContaBancaria
class ContaBancaria {
    constructor(agencia, numero, tipo, saldo = 0) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this.saldo = saldo; // Saldo inicial é 0 por padrão
    }
  
    // Método para depositar um valor na conta
    depositar(valor) {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("O valor do depósito deve ser positivo.");
      }
    }
  
    // Método para sacar um valor da conta
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Saldo insuficiente ou valor inválido para saque.");
      }
    }
  }
  
  // Classe ContaCorrente que herda de ContaBancaria
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaoCredito) {
      super(agencia, numero, "conta corrente"); // Tipo padrão é 'conta corrente'
      this.cartaoCredito = cartaoCredito;
    }
  }
  
  // Classe ContaPoupanca que herda de ContaBancaria
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
      super(agencia, numero, "conta poupança"); // Tipo padrão é 'conta poupança'
    }
  }
  
  // Classe ContaUniversitaria que herda de ContaBancaria
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
      super(agencia, numero, "conta universitária"); // Tipo padrão é 'conta universitária'
    }
  
    // Método saque modificado para a ContaUniversitaria
    sacar(valor) {
      if (valor > 0 && valor <= this.saldo && valor < 500) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Apenas saques de até R$500 são permitidos para conta universitária, ou saldo insuficiente.");
      }
    }
  }
  
  // Exemplo de uso
  const contaCorrente = new ContaCorrente("1234", "567890", true);
  contaCorrente.depositar(1000);
  contaCorrente.sacar(300); // Saque de R$300 realizado com sucesso
  
  const contaPoupanca = new ContaPoupanca("1234", "567891");
  contaPoupanca.depositar(500);
  contaPoupanca.sacar(200); // Saque de R$200 realizado com sucesso
  
  const contaUniversitaria = new ContaUniversitaria("1234", "567892");
  contaUniversitaria.depositar(1000);
  contaUniversitaria.sacar(600); // Saque não realizado
  contaUniversitaria.sacar(400); // Saque de R$400 realizado com sucesso
  