// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

let celsius = prompt('Quantos Graus Celsius está fazendo agora: ');
let fahrenheit = (celsius*1.8)+32;

console.log('Temperatura em Celsius: '+ celsius);
console.log('Temperatura em Fahrenheit: '+ fahrenheit);
