const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const alunos = parseInt(input[0]);
const monitores = parseInt(input[1]);

const total = alunos + monitores;

if (total <= 50) {
    console.log("S");
} else {
    console.log("N");
}
