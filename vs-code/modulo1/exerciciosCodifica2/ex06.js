// Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado

const prompt = require('prompt-sync')();
let numeroSorteado = Math.floor(Math.random()*5);
let numeroEscolhido; 
while(numeroEscolhido!=numeroSorteado){
    numeroEscolhido = prompt('Tente descobrir o numero de 1 a 5:');
    if(numeroEscolhido == numeroSorteado){
        console.log('Parabens o numero escolhido foi: '+numeroSorteado );
    }
}