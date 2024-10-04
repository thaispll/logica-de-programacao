class Animal {
    som() {
        return "Som de animal";
    }
}

class Cachorro extends Animal {
    som(){
        return "Au au";
    }
}

class Gato extends Animal {
    som(){
        return "Miau miau"
    }
}

const meuCachorro = new Cachorro();
const meuGato = new Gato();

console.log(meuCachorro.som());
console.log(meuGato.som());