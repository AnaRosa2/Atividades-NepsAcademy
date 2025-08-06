const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [P1, C1, P2, C2] = line.trim().split(' ').map(Number);

  const esquerda = P1 * C1;
  const direita = P2 * C2;

  if (esquerda === direita) {
    console.log(0);
  } else if (esquerda > direita) {
    console.log(-1);
  } else {
    console.log(1);
  }

  rl.close();
});
