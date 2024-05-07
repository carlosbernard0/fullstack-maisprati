// Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
// Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
// valores da sequência.
const prompt = require('prompt-sync')();
let numero = parseInt(prompt('Qual seria o valor: '));
let somaDaProgressao = 0;

for (let i = 1; i <= 10; i++) {
    console.log('Termo '+i+' é: '+numero);
    somaDaProgressao+= numero
    numero+= numero;
    

}

console.log('Somando a sequência ao todo dá: '+somaDaProgressao);



