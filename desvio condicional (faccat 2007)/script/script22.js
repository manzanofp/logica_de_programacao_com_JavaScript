var horastrabalhadas = +(prompt("Digite a quantidade de horas trabalhadas no mês: "));
var salariohora = +(prompt("Digite o valor do salário hora: "));
var salariomes = horastrabalhadas * salariohora;

if (salariomes > 40) {
    var reajuste = horastrabalhadas - 40;
    var reajuste1 = (reajuste * horastrabalhadas) / 2;
    alert("o salário com acrescimo de horas extras é de: R$" + (salariomes + reajuste1));

} else {
    alert("O salário d o funcionário é de: R$" + salariomes);
}