// Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.

let M = new Array(50);
let vetorNumPrincipal =[];
for(let i= 0; i< M.length;i++){
    M[i] = new Array(50);
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] = Math.floor((Math.random()*10)+1);
        if(i == j){
            vetorNumPrincipal.push(M[i][j]);
        }
    }
}

console.table(M);

for(let i= 0; i< M.length;i++){
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] *= vetorNumPrincipal[i];
        
    }
}

console.table(M)