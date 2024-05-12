// Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.
let M = new Array(5);

for (let i = 0; i < M.length; i++) {
    M[i] = new Array(5);
}

let SL = new Array(5);
let SC = new Array(5);

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        let value = Math.floor(Math.random()*3);
        M[i][j] = value;
    }
}

for (let i = 0; i < M.length; i++) {
    let sumAllLine = 0
    let sumAllColumn = 0
    for (let j = 0; j < M[i].length; j++) {
        sumAllLine+= M[i][j];
        sumAllColumn+= M[j][i];
    }
    SL[i] = sumAllLine;   
    SC[i] = sumAllColumn;
}

console.table('Matriz:');
console.table(M);
console.table('Soma das Linhas:');
console.table(SL);
console.table('Soma das Colunas:');
console.table(SC);