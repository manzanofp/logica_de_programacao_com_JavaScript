var n1 = +(prompt("Digite o primeiro valor: "));
var n2 = +(prompt("Digite o segundo valor: "));
var n3 = +(prompt("Digite o terceiro valor: "));

if (n1 < n2 && n1 < n3) {
    var soma = n2 + n3;
    alert("Os maiores números digitados foram: " + n2 + " e " + n3 + ". A soma de ambos é: " + soma + ".");
} else if (n2 < n1 && n2 < n3) {
    var soma = n1 + n3;
    alert("Os maiores números digitados foram: " + n1 + " e " + n3 + ". A soma de ambos é: " + soma + ".");
} else if (n3 < n1 && n3 < n2) {
    var soma = n1 + n2;
    alert("Os maiores números digitados foram: " + n1 + " e " + n2 + ". A soma de ambos é: " + soma + ".");
}