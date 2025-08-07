const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').trim();

const x = parseInt(input);

if (x > 0) {
    console.log("positivo");
} else if (x < 0) {
    console.log("negativo");
} else {
    console.log("nulo");
}
