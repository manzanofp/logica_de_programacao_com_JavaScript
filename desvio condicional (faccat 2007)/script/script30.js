var n1 = +(prompt("Digite o primeiro valor: "));
var n2 = +(prompt("Digite o segundo valor: "));
var n3 = +(prompt("Digite o terceiro valor: "));

if (n1 < n2 && n2 < n3 && n3 > n1) {
    alert("Em ordem crescente temos: " + n1 + ", " + n2 + " e " + n3 + ".");
} else if (n1 < n2 && n1 < n3 && n2 > n3) {
    alert("Em ordem crescente temos: " + n1 + ", " + n3 + " e " + n2 + ".");
} else if (n1 > n2 && n1 < n3 && n2 < n3) {
    alert("Em ordem crescente temos: " + n2 + ", " + n1 + " e " + n3 + ".");
} else if (n1 > n2 && n1 > n3 && n2 < n3) {
    alert("Em ordem crescente temos: " + n2 + ", " + n3 + " e " + n1 + ".");
} else if (n3 < n1 && n3 < n2 && n2 > n1) {
    alert("Em ordem crescente temos: " + n3 + ", " + n1 + " e " + n2 + ".");
} else if (n3 < n1 && n3 < n2 && n2 < n1) {
    alert("Em ordem crescente temos: " + n3 + ", " + n2 + " e " + n1 + ".");
}