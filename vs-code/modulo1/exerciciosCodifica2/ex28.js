// Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

let M = new Array(10);
for (let i = 0; i < M.length; i++) {
    M[i] = new Array(10);
}

let sumLow = 0;
let sumHigh = 0;

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] = Math.floor(Math.random()*10);
        if(i == j){
            M[i][j]= 1;    
        }else if (i < j){
            sumHigh += M[i][j];
        }else if(i>j){
            sumLow += M[i][j];
        };
        
    }
    
}

for (let i = 0; i < M.length; i++) {
    console.log(M[i][0]+' '+M[i][1]+' '+M[i][2]+' '+M[i][3]+' '+M[i][4]+' '+M[i][5]+' '+M[i][6]+' '+M[i][7]+' '+M[i][8]+' '+M[i][9]);
    
}

console.log(sumHigh);
console.log(sumLow);