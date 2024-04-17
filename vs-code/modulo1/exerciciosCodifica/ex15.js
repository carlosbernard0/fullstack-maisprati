// Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')();

let num = parseFloat(-1);
let peso = parseFloat(0);
let valoresSomados = parseFloat(0);

let somaDosPesos = parseFloat(0);
let mediaPonderada;

while(num != 0){
    num = parseFloat(prompt('Qual é o valor do numero: '));
    if(num != 0){
        peso = parseFloat(prompt('Qual é o peso desse numero: '));
        aux = num*peso;
        valoresSomados += aux;
        somaDosPesos+=peso;
    }
}

mediaPonderada =parseFloat(valoresSomados / somaDosPesos);
console.log('Média ponderada é: '+ mediaPonderada.toFixed(2))
