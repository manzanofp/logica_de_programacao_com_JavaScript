let texto = ""
let i = 0;

do {
    texto += "<br>o número é: " + i;
    i++;
}
while (i < 10);

document.getElementById("p").innerHTML = texto;