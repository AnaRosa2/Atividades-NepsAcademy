const readline = require('readline');

// Configura a leitura do teclado
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array para armazenar os dois valores
let numeros = [];

rl.on('line', (input) => {
  numeros.push(parseFloat(input));

  if (numeros.length === 2) {
    const resultado = numeros[0] / numeros[1];
    console.log(resultado.toFixed(2)); // Exibe com 2 casas decimais
    rl.close();
  }
});
