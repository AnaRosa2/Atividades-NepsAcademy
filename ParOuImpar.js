const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const bino = parseInt(input[0]);
const cino = parseInt(input[1]);

const soma = bino + cino;

if (soma % 2 === 0) {
    console.log("Bino");
} else {
    console.log("Cino");
}
