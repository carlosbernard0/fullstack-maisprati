//Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).

const prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt('Digite a nota da avaliação 1: '));
let nota2 = parseFloat(prompt('Digite a nota da avaliação 2: '));

let media = parseFloat((nota1+ nota2)/2.0);

if(media < 6.0){
    console.log('Sua nota foi '+media+', você esta de recuperacão!')
}else{
    console.log('PARABÉNS! Você foi aprovado! média de: '+media)
}