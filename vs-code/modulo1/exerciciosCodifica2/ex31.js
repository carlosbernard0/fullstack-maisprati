// Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados.
const prompt = require('prompt-sync')();
let A = prompt('Digite um numero inteiro de 1 a 10: ');
let V = new Array(30);
for (let i = 0; i < V.length; i++) {
    V[i] = new Array(30);
}

let qntdSameA = 0;
let X = [];

for (let i = 0; i < V.length; i++) {
    for (let j = 0; j < V[i].length; j++) {
        let randomValue = Math.floor((Math.random()*10)+1);
        V[i][j] = randomValue 
        if(randomValue == A){
            qntdSameA++;
        }else{
           X.push(V[i][j]); 
        }
    }
}
console.log('Matriz V:');
console.table(V);

console.log('Quantidade de numeros da matriz iguais A: '+qntdSameA);
console.log('Vetor com os numeros diferentes de A: '+X.sort());