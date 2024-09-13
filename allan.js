let salarioAumento = 0.0;
let salarioAtual = 0.0;
let salario = parseFloat(prompt("Informe o salario"));

if (salario <= 500) {
    salarioAtual = (salario * 15) / 100;  
    salarioAumento = salario + salarioAtual;
    console.log(salarioAumento);
} else if (salario > 500 && salario <= 1000) {  
    salarioAtual = (salario * 12.5) / 100;
    salarioAumento = salario + salarioAtual;
    console.log(salarioAumento);
} else if (salario > 1000) { 
    salarioAtual = (salario * 10) / 100;
    salarioAumento = salario + salarioAtual;
    console.log(salarioAumento);
}