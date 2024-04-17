//Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Digite o valor do numero 1: '));
let num2 = parseInt(prompt('Digite o valor do numero 2: '));
let num3 = parseInt(prompt('Digite o valor do numero 3: '));
let num4 = parseInt(prompt('Digite o valor do numero 4: '));

num4 = num1 + num2 + num3;
num1 += 25;
num2 = num2 ** 3;
num3 = (num3*.12);
num4 += (num1 + num2 + num3);

console.log(num1);
console.log(num2);
console.log(num3.toFixed(1));
console.log(num4);

