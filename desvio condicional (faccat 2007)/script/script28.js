var n1 = +(prompt("Digite o primeiro valor: "));
var n2 = +(prompt("Digite o segundo valor: "));
var n3 = +(prompt("Digite o terceiro valor: "));

if (n1 > n2 && n1 > n3) {
    alert("dentre os três números digitados: " + n1 + ", " + n2 + " e " + n3 + ". O maior valor digitado foi: " + n1 + ".");
} else if (n2 > n1 && n2 > n3) {
    alert("dentre os três números digitados: " + n1 + ", " + n2 + " e " + n3 + ". O maior valor digitado foi: " + n2 + ".");
} else {
    alert("dentre os três números digitados: " + n1 + ", " + n2 + " e " + n3 + ". O maior valor digitado foi: " + n3 + ".");
}