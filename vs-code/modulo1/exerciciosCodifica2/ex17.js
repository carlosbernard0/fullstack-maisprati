// Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade

const prompt = require('prompt-sync')();
let listNames =[];
let listAges = [];
for (let i = 0; i < 9; i++) {
    listNames[i] = prompt('Qual seu nome: ');
    listAges[i] = parseInt(prompt('Qual é sua idade: '));
}

for (let i= 0; i<listAges.length;i++) {
    if(listAges[i] <= 18){
        console.log('Pessoa com o nome '+ listNames[i]+' tem idade de '+listAges[i]);
    }
}