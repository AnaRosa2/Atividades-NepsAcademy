const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = parseInt(input[0]);
let totalCoposQuebrados = 0;

for (let i = 1; i <= N; i++) {
    const [latas, copos] = input[i].split(' ').map(Number);
    if (latas > copos) {
        totalCoposQuebrados += copos;
    }
}

console.log(totalCoposQuebrados);
