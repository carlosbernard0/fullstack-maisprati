// Crie um programa que receba uma lista de números do usuário e retorne o
// maior e o menor número da lista

let nums = [1,2,3,4,5,6,7,8,19,123,245,242,555,133,199,23,45];

let max = Math.max(...nums);
let min = Math.min(...nums);

console.log('Menor numero é: '+min+' e o maior é: '+max);