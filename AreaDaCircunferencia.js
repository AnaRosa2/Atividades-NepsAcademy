const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim();

const raio = parseFloat(input);
const pi = 3.1416;
const area = pi * raio * raio;

console.log(area.toFixed(2));
