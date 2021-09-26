var horainicio = parseInt(prompt("Digite a hora de inicio do jogo:"))

var horafinal = parseInt(prompt("Digite a hora na qual o jogo acabou:"))



if (horainicio > horafinal) {

    var totalhoras = horafinal - horainicio + 24

    alert("O total de horas corridas do jogo é de: " + totalhoras)

} else {

    var totalhoras = horafinal - horainicio

    alert("O total de horas corridas do jogo é de: " + totalhoras)

}