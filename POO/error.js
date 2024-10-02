function dividir(a, b){
  try{
    if(b===0){
        throw new Error("Divisão por zero não permitida");
    }
    return a / b;
} catch(erro){
    console.log("Erro:"+erro.message);
} finally {
    console.log("Operação finalizada")
    }
}

console.log(dividir(10, 0)); 
//console.log(dividir(10, 0));
