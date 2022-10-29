let numero;
let numeroPar;
let numeroImpar;

numero = 81;
numeroPar = numero % 2 === 0;
numeroImpar = numero % 2 === 1;

if (numeroPar) {
  console.log("O número é par");
} else if (numeroImpar) {
  console.log("O número é impar");
} else {
  console.log("Número inválido");
}
