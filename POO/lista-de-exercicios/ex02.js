/* Crie uma classe Retangulo com os atributos largura e altura. 
Adicione um método calcularArea que retorne a área do retângulo*/

class Retangulo {
    constructor(largura, altura ){
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea(){
        console.log(`A área do retângulo é: ${this.largura * this.altura}`);
    }
}

let retangulo1 = new Retangulo (5, 10);
retangulo1.calcularArea();