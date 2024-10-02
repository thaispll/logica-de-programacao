let pessoa = {
    nome: "Ana", 
    idade: 30
};

pessoa.cidade = "Rio de Janeiro";
console.log(pessoa.cidade);

pessoa.idade = 31;
console.log(pessoa.idade);

delete pessoa.cidade;
console.log(pessoa.cidade);
