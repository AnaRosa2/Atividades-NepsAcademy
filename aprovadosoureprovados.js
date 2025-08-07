var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valores = input.trim().split(' ').map(Number);

var nota1 = valores[0];
var nota2 = valores[1];
var media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log("Aprovado");
} else if (media >= 4) {
    console.log("Recuperacao");
} else {
    console.log("Reprovado");
}
