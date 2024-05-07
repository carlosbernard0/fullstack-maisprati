// Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
// principal são iguais a 1 e os demais são nulos.

let M = [[1,2,3,4,5,6,7],[1,2,3,4,5,6,7]];

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        console.log(M[i][j]);
        
    }
    
}