// Cada novo termo na seqüência de Fibonacci é gerado adicionando
//  os dois termos anteriores. Começando com 0 e 1, os primeiros termos serão:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ( ... )
// Considerando os termos da sequência de Fibonacci a partir dos pares 0 e 1,
//  cujos valores não excedam cinquenta mil, encontre a soma dos termos pares.

const prompt = require('prompt-sync')();
// let qntdNumeros = prompt('Voce quer a soma de quantos numeros da sequencia fibonacci: ');
let somaPar = 0;


function somaFibonacci(n){
    if(n <= 1){
        return n;
    }else{
        if(n % 2 == 0){
            somaPar+=n;
        }
        return somaFibonacci(n-1)+somaFibonacci(n-2);
    }
}

console.log(somaFibonacci(100));
console.log(somaPar);