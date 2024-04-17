const prompt = require('prompt-sync')();

let num = prompt('Digite um numero para ver a tabela:');


for (let i = 1; i <= 10; i++) {
    let multiplicacao= i*num;
    console.log(num+' * '+i+' = '+multiplicacao);
}