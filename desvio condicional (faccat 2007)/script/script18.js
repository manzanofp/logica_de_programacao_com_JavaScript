const anoatual = 2021;
var anonasc = +(prompt("Digite seu ano de nascimento: "));
valor = anoatual - anonasc
if (valor > 16) {
    alert("Pode votar");
} else {
    alert("Não pode votar");
}