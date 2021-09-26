var totaleleitor = parseInt(prompt("Digite o número de eleitores: "));
var totalbrancos = parseInt(prompt("Digite o número de votos em branco: "));
var totalnulos = parseInt(prompt("Digite o número de votos nulos: "))
var totalvalidos = parseInt(prompt("Digite o número de votos válidos"));
alert("A média de votos brancos é: " + totalbrancos * 100 / totaleleitor + "%");
alert("A média de votos brancos é: " + totalnulos * 100 / totaleleitor + "%");
alert("A média de votos brancos é: " + totalvalidos * 100 / totaleleitor + "%");