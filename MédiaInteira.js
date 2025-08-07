const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

const media = Math.floor((A + B) / 2);

console.log(media);
