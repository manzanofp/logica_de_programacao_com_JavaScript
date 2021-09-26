var salariofixo = parseFloat(prompt("Digite o seu salário fixo: R$"));
var salariocomissao = parseFloat(prompt("Digite o valor da sua comissão:"));
var totalcarro = parseInt(prompt("Digite o total de carros vendidos"));
var totalvenda = parseFloat(prompt("Digite o total de suas vendas"));
var comissaocarro = salariocomissao * totalcarro;
var comissao2 = totalvenda / 100 * 5;
var salariofinal = comissaocarro + comissao2 + salariofixo;
alert("O sálario final do vendedor é: R$" + salariofinal);