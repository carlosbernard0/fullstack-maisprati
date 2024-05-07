// Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt = require('prompt-sync')();
let listNumbers = [];

for (let i = 0; i < 10; i++) {
    listNumbers[i] = prompt('select a number: ');
}

for (const number of listNumbers) {
    if(listNumbers[number] % 2 == 0){
        console.log('In position '+number+' number: '+listNumbers[number]);
    }
}