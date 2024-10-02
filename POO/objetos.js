function CarroUngido(marca, modelo, ano, cor) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.ligar = function(){
        console.log("O carro está ligado.");
    };
}


let meuCarro = new CarroUngido("Volkswagen","Gol", 2016, "preto");

console.log(meuCarro.marca.modelo.ano.cor);
meuCarro.ligar();
