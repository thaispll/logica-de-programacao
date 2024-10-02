const pessoa = {
    nome: "Alice",
    idade: 30,
    profissao: "Engenheira",
    cidade: "São Paulo",
    endereço: "Jacarepaguá"
  };
  let {
    nome,...resto
  } = pessoa
  // Usar `Object.values` para obter todos os valores do objeto
  const valores = [...Object.values(pessoa)];
  console.log(valores);  
  