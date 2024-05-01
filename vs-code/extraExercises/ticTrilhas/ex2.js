// Escrever um programa que leia um texto e conte a quantidade de letra com
// e sem espaço.

const prompt = require('prompt-sync')();
let txt = prompt('Write a text or word:');

let quantityWithSpace = txt.length;
let quantityOutSpace = txt.replace(" ","").length;

console.log('With Spaces '+ quantityWithSpace);
console.log('Out Spaces '+ quantityOutSpace);