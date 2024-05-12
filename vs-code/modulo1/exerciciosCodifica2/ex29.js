// Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz

let M = new Array(5);

for (let i = 0; i < M.length; i++) {
    M[i] = new Array(5);
}

let sumOfFourLine = 0;
let sumOfTwoColumn = 0;
let sumOfPrincipalAngule = 0;
let sumAllElements = 0;
for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M[i].length; j++) {
        let value = Math.floor(Math.random()*5);
        M[i][j] = value;
        if(i == 4){
            sumOfFourLine+=value;
        }
        if(j == 2){
            sumOfTwoColumn+= value;
        }
        if(i == j){
            sumOfPrincipalAngule += value;
        }
        sumAllElements+=value;
    }
}

console.table(M);

console.log('The sum of 4 line is: '+sumOfFourLine);
console.log('The sum of 2 column is: '+sumOfTwoColumn);
console.log('The sum of principal angule is: '+sumOfPrincipalAngule);
console.log('The sum of all elements is: '+sumAllElements);