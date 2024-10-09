class Cachorro {
    constructor(nome) {
      this._nome = nome; // Usando underline para indicar que é um atributo protegido
    }
  
    // Método getter para acessar o nome do cachorro
    get nome() {
      return this._nome;
    }
  
    // Método setter para modificar o nome do cachorro
    set nome(novoNome) {
      this._nome = novoNome;
    }
  
    // Método para exibir o nome do cachorro
    exibirNome() {
      console.log(`Nome do cachorro: ${this._nome}`);
    }
  }
  
  // Exemplo de uso
  const meuCachorro = new Cachorro("Rex");
  meuCachorro.exibirNome(); // Saída: Nome do cachorro: Rex
  
  // Modificando o nome do cachorro
  meuCachorro.nome = "Fido"; // Usando o setter
  meuCachorro.exibirNome(); // Saída: Nome do cachorro: Fido
  