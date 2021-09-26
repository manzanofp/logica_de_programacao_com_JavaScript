var A = +(prompt("Digite o valor do primeiro lado: "));
var B = +(prompt("Digite o valor do segundo lado: "));
var C = +(prompt("Digite o valor do terceiro lado: "));

if (A < B + C && B < A + C && C < B + A) {
    alert("ISSO É UM TRIÂNGULO!");
} else {
    alert("ISSO NÃO É UM TRIÂNGULO!");
}