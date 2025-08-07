const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const X = parseInt(input[0]);
const E = parseInt(input[1]);

if (X === 0 || E === 0) {
    console.log("eixos");
} else if (X > 0 && E > 0) {
    console.log("Q1");
} else if (X < 0 && E > 0) {
    console.log("Q2");
} else if (X < 0 && E < 0) {
    console.log("Q3");
} else if (X > 0 && E < 0) {
    console.log("Q4");
}
