// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
// h-1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida

const prompt = require('prompt-sync')();
let velocidadeCarro = prompt('Qual é a velocidade do carro atual:');

if(velocidadeCarro > 80){
    console.log('Você foi multado!');
    let multa = velocidadeCarro - 80;
    console.log('Sua multa é de R$'+multa);
}