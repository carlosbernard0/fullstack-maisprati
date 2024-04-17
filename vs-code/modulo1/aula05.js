//ex1
const prompt = require('prompt-sync')();

// let num = input('Digite um numero par ou impar:')

// if(num % 2 != 0){
//     console.log('O numero é impar');
// }else{
//     console.log('O numero é par');
// }

// //ex2
// let numero1 = parseInt(prompt('Digite o valor do numero 1:'))
// let numero2 = parseInt(prompt('Digite o valor do numero 2:'))

// if(numero1 < numero2){
//     console.log('numero 2 maior');
// }else if( numero2< numero1){
//     console.log('numero 1 maior')
// }else{
//     console.log('os numeros tem o mesmo valor')
// }

// ex4
// let numero1 = parseInt(prompt('Digite o valor do numero 1:'))
// let numero2 = parseInt(prompt('Digite o valor do numero 2:'))

// let operacao  = prompt('defina a operacao para desejada (+,-,*,/)');

// let resultado = 0;

// switch(operacao){
//     case '+': 
//         resultado = numero1+numero2;
//         break;
//     case '-':
//         resultado = numero1 - numero2;
//         break;
//     case '*':
//         resultado = numero1 * numero2;
//         break;
//     case '/':
//         resultado= numero1 / numero2;
//         break;
// }

// console.log('Seu resultado é: '+resultado);

//ex5
// let num = 5;

// while(num <= 100){
//     if(num % 5 == 0){
//         console.log(num);
//     }
//     num++;
// }

//ex6
// let num = 0;
// let soma = 0;


// while(num <= 1000){
//     soma+= num;
//     num++;
// }
// console.log(soma);

// ex 7
const numCorreto = Math.floor((Math.random()*10)+1);
let tentativa;

do{
    tentativa = prompt('Digite um numero de 1 a 10: ');
    if(tentativa < numCorreto){
        console.log('Tente um numero maior');
    }else{
        console.log('Tente um numero menor');
    }
}while(tentativa != numCorreto);

console.log('Parabéns o numero escolhido foi o '+ numCorreto);