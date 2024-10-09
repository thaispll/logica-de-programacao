// Classe base Animal com o método emitirSom
class Animal {
    emitirSom() {
      console.log("Som genérico do animal");
    }
  }
  
  // Classe Cachorro que herda de Animal e sobrescreve o método emitirSom
  class Cachorro extends Animal {
    emitirSom() {
      console.log("Latido");
    }
  }
  
  // Classe Gato que herda de Animal e sobrescreve o método emitirSom
  class Gato extends Animal {
    emitirSom() {
      console.log("Miau");
    }
  }
  
  // Exemplo de uso
  const meuCachorro = new Cachorro();
  meuCachorro.emitirSom(); // Saída: Latido
  
  const meuGato = new Gato();
  meuGato.emitirSom(); // Saída: Miau
  