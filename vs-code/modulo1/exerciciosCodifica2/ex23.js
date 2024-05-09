// Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
// principal são iguais a 1 e os demais são nulos.

let M = new Array(7);
for (let i = 0; i < M.length; i++) {
    M[i] = new Array(7);    
}
let aux = 0

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        if(i == aux && j == aux){
            M[i][j] = 1;
        }else{
            M[i][j] = 0;
        }
    }
    aux++;
}

for (let i = 0; i < M.length; i++) {
    console.log(M[i][0]+' '+M[i][1]+' '+M[i][2]+' '+M[i][3]+' '+M[i][4]+' '+M[i][5]+' '+M[i][6]);
    
}