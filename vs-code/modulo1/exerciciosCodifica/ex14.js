// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números

const prompt = require('prompt-sync')();

let soma = 0;
let qntdDeNumeros = 0;
let num = -1;

while(num !=0 ){
    num = parseFloat(prompt('Qual é o valor do numero: '));
    soma += num;
    if(num != 0){
        qntdDeNumeros++;
    }
}

let media = soma / qntdDeNumeros;
console.log('A média aritmética é: '+ media.toFixed(2));