
class Veiculo {
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
    }
    info(){
        return `Veículo: ${this.marca} ${this.modelo}`;
    }
    velocidadeMaxima(){
        return "Velocidade máxima não definida";
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo, portas){
        super(marca, modelo);
        this.portas = portas;
    }
    info(){
        return `${super.info()} | Portas: ${this.portas}`
    }
    velocidadeMaxima(){
        return `Velocidade máxima: ${super.velocidadeMaxima()} km/h`
    }
}

const meuCarro = new Carro('Toyota', 'Corolla',4)
console.log(meuCarro.info())