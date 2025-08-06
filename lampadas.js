const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', (line) => {
  input.push(line.trim());

  // Quando já tiver as duas linhas, processa
  if (input.length === 2) {
    const n = parseInt(input[0]);
    const comandos = input[1].split(' ').map(Number);

    let A = 0, B = 0;

    for (let i = 0; i < n; i++) {
      if (comandos[i] === 1) {
        A = 1 - A; // alterna A
      } else if (comandos[i] === 2) {
        A = 1 - A; // alterna A
        B = 1 - B; // alterna B
      }
    }

    console.log(A);
    console.log(B);

    rl.close();
  }
});
