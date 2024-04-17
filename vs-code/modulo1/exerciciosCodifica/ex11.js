// Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
// cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
// ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
// NEGATIVO.

const prompt = require('prompt-sync')();
let num = 0;

while(num >= 0){
    num= parseInt(prompt('Qual é o numero: '))
    if(num >= 0){
        if(num % 2 == 0){
            console.log(num + ' é par');
        }else{
            console.log(num + ' é impar');
        }
    }
}