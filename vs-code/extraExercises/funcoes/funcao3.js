// Implemente uma função que calcule a média aritmética de um array de números e retorne o resultado.
//  Utilize essa função para calcular a média de diferentes conjuntos de números.

const prompt = require('prompt-sync')();


let numbers = Array();
for (let i = 1; i <= 10; i++) {
    numbers.push(i);    
}


function arithmeticAverage(array = Array()){
    let sumOfNums =0;
    let quantityNums = 0;
    for (let i = 0; i < array.length; i++) {
        sumOfNums += array[i];
        quantityNums++;
    }
    return sumOfNums/quantityNums;
}

let result = arithmeticAverage(numbers);
console.log(result);