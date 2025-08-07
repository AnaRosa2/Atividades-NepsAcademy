const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();
const X = parseInt(input);
let resultado = [];

for (let i = 1; i <= X; i++) {
    if (X % i === 0) {
        resultado.push(i);
    }
}

console.log(resultado.join(' '));
