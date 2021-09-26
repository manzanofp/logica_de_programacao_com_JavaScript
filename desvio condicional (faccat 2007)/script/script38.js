var usuario = +(prompt("Digite o usuário: "));
var senha;

if (usuario != 1234) {
    alert("Usuário invalido! Tente novamente.");
} else {
    alert("Bem vindo!")
    var senha = +(prompt("Digite sua senha: "));
}
if (senha != 9999) {
    alert("Senha invalida! Tente novamente.")
} else if (senha == 9999) {
    alert("Acesso permitido!");
}