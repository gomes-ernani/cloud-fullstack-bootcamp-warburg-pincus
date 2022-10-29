/*
 * Crie um programa para calcular o valor de uma viagem.
 *
 * Você deverá ter 5 variáveis:
 * - Preço do etanol;
 * - Preço do gasolina;
 * - O tipo de combustível que está no seu carro;
 * - Gasto médio de combustível por quilômetro;
 * - Distância em quilômetros da viagem;
 *
 * Imprimir no console o valor gasto para realizar a viagem.
 */

let precoDoEtanol;
let precoDaGasolina;
let tipoDeCombustivel;
let quilometrosPorLitro;
let distanciaEmQuilometros;
let litrosConsumidos;
let valorMedioGasto;

precoDoEtanol = 3.95;
precoDaGasolina = 5.36;
tipoDeCombustivel = "gasolina";
quilometrosPorLitro = 12;
distanciaEmQuilometros = 16275;

litrosConsumidos = distanciaEmQuilometros / quilometrosPorLitro;

if (tipoDeCombustivel === "etanol") {
  valorMedioGasto = litrosConsumidos * precoDoEtanol;
  console.log(valorMedioGasto.toFixed(2));
} else if (tipoDeCombustivel === "gasolina") {
  valorMedioGasto = litrosConsumidos * precoDaGasolina;
  console.log(valorMedioGasto.toFixed(2));
} else {
  console.log("Tipo de combustível inválido!");
}
