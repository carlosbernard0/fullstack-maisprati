// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();


let num1= 0;
let num2= 0;
while(num1 == num2){
    num1 = parseInt(prompt('Digite o valor 1: '));
    num2 = parseInt(prompt('Digite o valor 2: '));
}
if(num1 < num2){
    console.log(num1);
    console.log(num2);
}else{
    console.log(num2);
    console.log(num1);
}