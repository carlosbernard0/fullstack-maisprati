// Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos
// da diagonal principal com a média dos elementos da diagonal secundária.

let M = new Array(3);
for (let i = 0; i < M.length; i++) {
    M[i] = new Array(3);    
}

for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        let randomValue = Math.floor((Math.random()*10)+1);
        M[i][j] = randomValue; 
    }
}
console.table(M);


let listNumsPrincipal = []
let listNumsSecond = []
for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        if(i == j){
            listNumsPrincipal.push(M[i][j]);
            listNumsSecond.push(M[M.length-1-i][j]);
            M[i][j] = listNumsPrincipal[i] * listNumsSecond[i];
        }
        
    }
}

console.table(listNumsPrincipal);
console.table(listNumsSecond);
console.table(M);
