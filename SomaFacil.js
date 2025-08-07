const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const UM = parseInt(input[0]);
const B = parseInt(input[1]);

const resultado = UM + B;

console.log(resultado);
