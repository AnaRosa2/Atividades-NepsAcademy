const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

const lado = parseInt(input);
const area = lado * lado;

console.log(area);
