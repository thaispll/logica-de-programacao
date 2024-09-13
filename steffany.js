function exibir() {
    var fruta = document.getElementById("fruit").value;
    switch (fruta) {
        case "maçã":
            alert("Não vendemos essa fruta aqui");
            break;
        case "kiwi":
            alert("Estamos com escassez de kiwi");
            break;
        case "melancia":
            alert("Está 3 reais o kilo");
            break;
        default:
            alert("Por favor, informe a fruta desejada!");
    }
}