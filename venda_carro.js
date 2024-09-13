automovel = prompt("Digite o tipo de automóvel que você deseja comprar em nossa loja:")

switch(automovel) {
    case "hatch":
        console.log("Compra efetuada com sucesso");
        break

    case "sedan":
    case "motocicleta":
    case "caminhonete":
        console.log("Tem certeza que não prefere este modelo?") 
           break    
    default:
        console.log("Não trabalhamos com este tipo de automóvel aqui!")
}