// Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

let A = new Array(3);
let B = new Array(3);
let P = new Array(3);


for (let i = 0; i < A.length; i++) {
    A[i] = new Array(5);    
    B[i] = new Array(5);
    P[i] = new Array(5);
}

for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random()*5);
        B[i][j] = Math.floor(Math.random()*5);
        P[i][j] = A[i][j] * B[i][j];
    }
}

for (let i = 0; i < A.length; i++) {
    console.log(A[i][0]+' '+A[i][1]+' '+A[i][2]+' '+A[i][3]+' '+A[i][4]);
    
}

console.log();

for (let i = 0; i < A.length; i++) {
    console.log(B[i][0]+' '+B[i][1]+' '+B[i][2]+' '+B[i][3]+' '+B[i][4]);
    
}

console.log();

console.log(P)