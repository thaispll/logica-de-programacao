class Produto {
    constructor(nome, preco, categoria = "Indefinido") {
      this.nome = nome;
      this.preco = preco;
      this.categoria = categoria; // Categoria padrão é "Indefinido"
    }
  
    // Método para exibir as informações do produto
    exibirInformacoes() {
      console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Categoria: ${this.categoria}`);
    }
  }
  
  // Exemplo de uso
  const produto1 = new Produto("Camiseta", 49.99, "Vestuário");
  produto1.exibirInformacoes(); // Saída: Nome: Camiseta, Preço: R$49.99, Categoria: Vestuário
  
  const produto2 = new Produto("Sabonete", 5.99);
  produto2.exibirInformacoes(); // Saída: Nome: Sabonete, Preço: R$5.99, Categoria: Indefinido
  