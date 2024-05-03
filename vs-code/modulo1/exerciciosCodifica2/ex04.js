// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

let seg1 = prompt('Digite o valor do segmento 1:');
let seg2 = prompt('Digite o valor do segmento 2:');
let seg3 = prompt('Digite o valor do segmento 3:');

if(seg1 + seg2 > seg3 && seg2 + seg3 > seg1 && seg1+ seg3 > seg2){
    console.log('Forma um triângulo');
}else{
    console.log('Não forma um triângulo');
}