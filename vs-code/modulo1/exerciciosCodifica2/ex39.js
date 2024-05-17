// Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B

let A = new Array(100);
for (let i = 0; i < A.length; i++) {
    let randomNum = Math.floor(Math.random()*2);
    if(randomNum == 0){
        A[i] = Math.floor(Math.random()*50)+1;
    }else if(randomNum == 1){
        A[i] = Math.floor(Math.random()*-50)-1;
    }
}

console.table(A);
let B = [];

for (let i = 0; i < A.length; i++) {
    if(A[i] > 0){
        B.push(A[i]);
    }    
}

console.table(B);