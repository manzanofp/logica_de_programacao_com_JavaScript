var idade_homem_1 = +(prompt("Idade do primeiro homem: "));
var idade_homem_2 = +(prompt("Idade do segundo homem: "));
var idade_mulher_1 = +(prompt("Idade da primeira mulher: "));
var idade_mulher_2 = +(prompt("Idade da segunda mulher: "));

if (idade_homem_1 > idade_homem_2 && idade_mulher_1 > idade_mulher_2) {
    var soma1 = idade_homem_1 + idade_mulher_2;
    var soma2 = idade_homem_2 * idade_mulher_1;
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1 + " e " + "o produto da idade do homem mais novo com a mulher mais velha é: " + soma2 + ".");
} else if (idade_homem_1 < idade_homem_2 && idade_mulher_1 < idade_mulher_2) {
    var soma1 = idade_homem_2 + idade_mulher_1;
    var soma2 = idade_homem_1 * idade_mulher_2;
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1 + " e " + "o produto da idade do homem mais novo com a mulher mais velha é: " + soma2 + ".");
} else if (idade_homem_1 < idade_homem_2 && idade_mulher_1 > idade_mulher_2) {
    var soma1 = idade_homem_2 + idade_mulher_2;
    var soma2 = idade_homem_1 * idade_mulher_1;
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1 + " e " + "o produto da idade do homem mais novo com a mulher mais velha é: " + soma2 + ".");
} else if (idade_homem_1 > idade_homem_2 && idade_mulher_1 < idade_mulher_2) {
    var soma1 = idade_homem_1 + idade_mulher_1;
    var soma2 = idade_homem_2 * idade_mulher_2;
    alert("A soma da idade do homem mais velho com a mulher mais nova é: " + soma1 + " e " + "o produto da idade do homem mais novo com a mulher mais velha é: " + soma2 + ".");
}