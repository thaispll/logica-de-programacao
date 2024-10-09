// Classe Endereco com atributos rua e numero
class Endereco {
    constructor(rua, numero) {
      this.rua = rua;
      this.numero = numero;
    }
  }
  
  // Classe Pessoa com um nome e um endereço agregado
  class Pessoa {
    constructor(nome, endereco) {
      this.nome = nome;
      this.endereco = endereco; // Agrega um objeto da classe Endereco
    }
  
    // Método para exibir as informações da pessoa e seu endereço
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Endereço: ${this.endereco.rua}, Número: ${this.endereco.numero}`);
    }
  }
  
  // Exemplo de uso
  const meuEndereco = new Endereco("Rua das Flores", 123);
  const pessoa = new Pessoa("Ana Silva", meuEndereco);
  pessoa.exibirInformacoes(); // Saída: Nome: Ana Silva, Endereço: Rua das Flores, Número: 123
  