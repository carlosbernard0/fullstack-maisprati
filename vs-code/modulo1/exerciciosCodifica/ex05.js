// Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0
const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Digite a nota da avaliação 1: '));
let nota2 = parseFloat(prompt('Digite a nota da avaliação 2: '));

let media = parseFloat((nota1+ nota2)/2.0);

if(media < 6.0){
    console.log('Sua nota foi '+media+', você esta de recuperacão!')
}else{
    console.log('PARABÉNS! Você foi aprovado! média de: '+media)
}
