// Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

let M = new Array(12);
for (let i = 0; i < M.length; i++) {
    M[i] = new Array(13);    
}

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        let randomValue = Math.floor((Math.random()*10)+1);
        M[i][j] = randomValue 
    }
}
console.table(M);

for (let i = 0; i < M.length; i++) {
    let numDivisor = 0;
    for (let j = 0; j < M[i].length; j++) {
        if(M[i][j] > numDivisor){
            numDivisor = M[i][j];
        }
    }

    console.log(numDivisor);
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] /= numDivisor;
    }
}

console.table(M);