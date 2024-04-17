//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo : possui todos os lados iguais (A=B e B=C)
const prompt = require('prompt-sync')();

let ladoA = prompt('Digite um valor para o primeiro lado: ');
let ladoB = prompt('Digite um valor para o segundo lado: ');    
let ladoC = prompt('Digite um valor para o terceiro lado: ');    

if((ladoA < ladoB+ladoC)&& (ladoB < ladoA+ladoC)&&(ladoC < ladoB+ladoA)){
    if((ladoA==ladoB)||(ladoA==ladoC)||(ladoB==ladoC)){
        console.log('É um trinângulo isósceles');
    }else if( ladoA != ladoB && ladoB != ladoC){
        console.log('É um trinângulo escaleno');
    }else if((ladoA==ladoB)&&(ladoB==ladoC)){
        console.log('É um trinângulo eqüilátero');
    }
}else{
    console.log('Não é um triângulo!!')
}
