// Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.
const prompt = require('prompt-sync')();


let M = new Array(6);
let A;
let V = new Array(36);
for (let i = 0; i < M.length; i++) {
    M[i] = new Array(6);
}
A = prompt('Digite um valor para A: ');
let aux = -1;
for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] = prompt('Digite um valor para a posicao ['+i+']['+j+']: '); 
        V[++aux] = M[i][j] * A;
    }    
}
console.log(V);


