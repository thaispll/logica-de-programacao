let caminhao = {
    marca: 'Volkswagen',
    modelo: 'Constellation',
    ano: 2024,
    cor: 'prata',
    cabine: [
        { tipo: 'simples', capacidade: 2, teto: 'fechado'  },  
        { tipo: 'dupla', capacidade: 5 },     
      ],

    ligar: function(){
        console.log('O caminhão está ligado.');
    },

    desligar: function(){
        console.log('O caminhão está desligado.')
    }

};


console.log(caminhao.cabine[0].teto);
console.log(caminhao["ano"], caminhao["marca"]);

caminhao.ligar();