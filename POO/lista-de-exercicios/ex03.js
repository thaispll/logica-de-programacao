// Classe Veiculo com atributos marca e modelo
class Veiculo {
    constructor(marca, modelo) {
      this.marca = marca;
      this.modelo = modelo;
    }
  }
  
  // Classe Moto que herda de Veiculo e possui um atributo adicional: cilindradas
  class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas) {
      super(marca, modelo); // Chama o construtor da classe pai (Veiculo)
      this.cilindradas = cilindradas;
    }
  
    // Método para exibir os detalhes da moto
    exibirDetalhes() {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Cilindradas: ${this.cilindradas}`);
    }
  }
  
  // Exemplo de uso
  const minhaMoto = new Moto('Honda', 'CB500', 500);
  minhaMoto.exibirDetalhes(); // Saída: Marca: Honda, Modelo: CB500, Cilindradas: 500
  