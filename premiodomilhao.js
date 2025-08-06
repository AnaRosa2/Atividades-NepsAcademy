const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');

const N = parseInt(input[0]);
let soma = 0;
let dias = 0;

for (let i = 1; i <= N; i++) {
  soma += parseInt(input[i]);
  dias++;
  if (soma >= 1000000) {
    break;
  }
}

console.log(dias);
