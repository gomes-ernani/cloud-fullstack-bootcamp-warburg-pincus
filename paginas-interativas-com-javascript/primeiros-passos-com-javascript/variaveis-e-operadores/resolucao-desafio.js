/*
 * Crie um programa para calcular o valor de uma viagem
 *
 * Você deverá ter 3 variáveis:
 * - Preço do combustível;
 * - Gasto médio de combustível por quilômetro;
 * - Distância em quilômetros da viagem;
 *
 * Imprimir no console o valor gasto para realizar a viagem.
 */

let precoDoCombustivel;
let quilometrosPorLitro;
let distanciaEmQuilometros;
let litrosConsumidos;
let valorMedioGasto;

precoDoCombustivel = 3.95;
quilometrosPorLitro = 15;
distanciaEmQuilometros = 320;

litrosConsumidos = (distanciaEmQuilometros / quilometrosPorLitro);
valorMedioGasto = (litrosConsumidos * precoDoCombustivel);

console.log(valorMedioGasto.toFixed(2));
