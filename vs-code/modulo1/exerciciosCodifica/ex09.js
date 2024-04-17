// Escreva um algoritmo que leia o código de origem de um produto e imprima a região
// do mesmo, conforme a tabela abaixo:

const prompt = require('prompt-sync')();

let produto = parseInt(prompt('Qual é o codigo de origem: '));

switch(produto){

    case 1:
        console.log('Sul');
        break;
    case 2: 
        console.log('Norte');
        break;
    case 3: 
        console.log('Leste');
        break;
    case 4: 
        console.log('Oeste');
        break;
    case 5: case 6: 
        console.log('Nordeste');
        break;
    case 7: case 8: case 9: 
        console.log('Sudeste');
        break;
    default:
        if(produto >= 10 && produto <= 20){
            console.log('Centro-Oeste');
        }else if(produto >= 25 && produto <= 50){
            console.log('Nordeste');
        }else if(produto > 50){
            console.log('Produto importado');
        }
        break;
}

