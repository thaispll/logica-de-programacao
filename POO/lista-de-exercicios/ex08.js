class Funcionario {
    static contador = 0; // Contador estático para rastrear o número total de funcionários
  
    constructor(nome, cargo) {
      this.nome = nome;
      this.cargo = cargo;
      Funcionario.contador++; // Incrementa o contador sempre que um novo funcionário é criado
    }
  
    // Método para exibir as informações do funcionário
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Cargo: ${this.cargo}`);
    }
  
    // Método estático para obter o número total de funcionários
    static obterTotalFuncionarios() {
      return Funcionario.contador;
    }
  }
  
  // Exemplo de uso
  const funcionario1 = new Funcionario("Maria", "Gerente");
  funcionario1.exibirInformacoes(); // Saída: Nome: Maria, Cargo: Gerente
  
  const funcionario2 = new Funcionario("João", "Desenvolvedor");
  funcionario2.exibirInformacoes(); // Saída: Nome: João, Cargo: Desenvolvedor
  
  console.log(`Total de funcionários: ${Funcionario.obterTotalFuncionarios()}`); // Saída: Total de funcionários: 2
  