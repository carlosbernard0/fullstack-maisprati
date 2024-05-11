// Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

let M = new Array(15);
for (let i = 0; i <M.length; i++) {
    M[i]= new Array(20);    
}
let somaM = new Array(15);
for (let i = 0; i < M.length; i++) {
    let soma = 0;
    for (let j = 0; j < M[i].length; j++) {
        
        M[i][j] = Math.floor(Math.random()*5);
        soma+=M[i][j];
    }
    somaM[i] = soma;    
}

for (let i=0; i<M.length;i++) {
    console.log('A soma da matriz da linha '+(i+1)+' é : '+somaM[i]);
    
}