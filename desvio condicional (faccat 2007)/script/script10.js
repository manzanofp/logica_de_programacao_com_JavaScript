var custofabrica = parseFloat(prompt("Digite o custo de fábrica do veículo "));
var distribuidor = custofabrica / 100 * 28;
var imposto = custofabrica / 100 * 45;
var custofinal = custofabrica + distribuidor + imposto;
alert("O custo final do veículo é de: " + custofinal);