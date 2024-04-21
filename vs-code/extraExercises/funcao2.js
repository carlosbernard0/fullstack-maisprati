// Desenvolva uma função que receba um número como parâmetro
//  e verifique se ele é par ou ímpar. Retorne true se for par e false se for ímpar.
const prompt = require('prompt-sync')();
let num = prompt('read a number for see if it EVEN or ODD: ');

function evenOrOdd(number){
    if(number % 2 == 0){
        console.log('This number is EVEN!');
    }else{
        console.log('This number is ODD!');
    }
}

evenOrOdd(num);