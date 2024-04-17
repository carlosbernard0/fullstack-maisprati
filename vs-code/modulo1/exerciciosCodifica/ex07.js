// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let qntdMacas = prompt('Digite quantas maçãs você deseja comprar: ');

if(qntdMacas < 12 ){
    let valor = parseFloat(qntdMacas*0.3);
    console.log('Essa quantidade dará: R$'+valor.toFixed(2));
}else if(qntdMacas >= 12){
    let valor = parseFloat(qntdMacas*0.25);
    console.log('Essa quantidade dará: R$'+valor.toFixed(2));
}



