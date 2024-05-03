// Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela: a) O
// somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.

const prompt = require('prompt-sync')();

let somaDeTodos= 0;
let menorNumero= 30000;
let qtndValores = 0;
let listaDePares =[];
let opcao = 1;

do{
    let valor = parseInt(prompt('Digite um valor: '));
    somaDeTodos+=valor;
    if(valor < menorNumero){
        menorNumero = valor;
    }
    qtndValores++;
    if(valor % 2 == 0){
        listaDePares.push(valor);
    }
    opcao = prompt('Deseja continuar? 1 para Sim, 0 para Não ');
}while(opcao != 0);

console.log('O somatório entre todos os valores: '+somaDeTodos);
console.log('menor valor digitado '+menorNumero);
console.log('média entre todos os valores: '+(somaDeTodos/qtndValores).toFixed(1));
console.log('valores pares:'+listaDePares);