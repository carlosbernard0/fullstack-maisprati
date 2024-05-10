// Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.

let M = new Array(6);
for (let i= 0; i< M.length;i++) {
    M[i] = new Array(8);
}
let C = new Array(6);

for (let i = 0; i < M.length; i++) {
    let quantityOfNegatives= 0;
    for (let j = 0; j < M[i].length; j++) {
        M[i][j] = generateRandomNum();
        if(M[i][j] < 0){
            C[i] = ++quantityOfNegatives;
        }
    }
}

for (let i=0; i<M.length;i++) {
    console.log('Na matriz M temos na linha '+(i+1)+' : '+C[i]+' negativos');
    
}

function generateRandomNum(){
    let numeroRandom = (Math.random());
        if(numeroRandom <= 0.5){
            numeroRandom = Math.floor(Math.random()*-20);
        }else{
            numeroRandom = Math.floor(Math.random()*20);
        }
    return numeroRandom;
}

