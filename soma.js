const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numeros = [];

rl.on('line', (line) => {
  numeros.push(parseInt(line.trim()));

  if (numeros.length === 2) {
    const soma = numeros[0] + numeros[1];
    console.log(soma);
    rl.close();
  }
});
