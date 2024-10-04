// Criando um objeto 'carro' com propriedades e métodos
let carro = {
   marca: 'Toyota',
   modelo: 'Corolla',
   ano: 2020,
   cor: 'azul',
   mostrarInformacao: function(){
    console.log(`Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}, Cor: ${this.cor}`);
   },
   
   //Método para alterar a cor do carro
   pintarCarro: function(novaCor){
    this.cor = novaCor;
   }
};

//Acessando propriedades
console.log(carro.marca);
console.log(carro.modelo);
console.log(carro.ano);

//Chamando métodos
carro.tipoDeCombustivel = "GNV";
//console.log(carro.tipoDeCombustivel);

delete carro.ano
console.log(carro.ano);

console.log('modelo' in carro);
console.log('ano' in carro);
console.log('tipoDeCombustivel' in carro);
console.log(carro)
