// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();
let cigarrosPorDia = prompt('Quantos cigarros você fuma por dia:');
let anosFumando = prompt('A quantos anos você fuma:');

let diasFumando = ((anosFumando*365));
let minutosPerdidoVida = (10*cigarrosPorDia);
let totalDeDiasPerdidos = ((diasFumando * minutosPerdidoVida)/60)/24;

console.log('O total de dias perdidos é: '+ totalDeDiasPerdidos.toFixed(2));

