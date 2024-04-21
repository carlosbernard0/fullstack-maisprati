// // ex 2 
// let elementos = [1,2,3,4];

// function encontrarMaiorNumero(vetor){
//     let maiorNum = -1;
//     for (let i = 0; i < vetor.length; i++) {
//         if(vetor[i] > maiorNum){
//             maiorNum = vetor[i];
//         }
//     }
//     return maiorNum;
// }

// console.log('O maior numero é: '+encontrarMaiorNumero(elementos));

//ex3
// function reverterPosicoes(vetor){
//     let resultado = [];
//     for (let i = vetor.length-1; i >= 0; i--) {
//        resultado.push(vetor[i]);
//     }
//     return resultado;
// }
// console.log(reverterPosicoes(elementos));

// ex4 soma de matriz
// let elementos = [1,2,3,4,5];
// elementos[0] = Array(1,2,3,4,5);
// elementos[1] = Array(1,2,3,4,5);
// elementos[2] = Array(1,2,3,4,5);
// elementos[3] = Array(1,2,3,4,5);
// elementos[4] = Array(1,2,3,4,5);

// function somaMatriz(matriz){
//     let soma = 0;
//     for (let i = 0; i < matriz.length; i++) {
//         for (let j = 0; j < matriz[i].length; j++) {
//             soma+= matriz[i][j];
//         }
        
//     }
//     return soma;
// }

// console.log('A soma da matriz é: '+somaMatriz(elementos));


// // ex5 maior numero da matriz
//     function maiorNumMatriz(matriz){
//         let maiorNum = matriz[0][0];
//         for (let i = 0; i < matriz.length; i++) {
//             for (let j = 0; j < matriz[i].length; j++) {
//                 if(matriz[i][j] > maiorNum){
//                     maiorNum = matriz[i][j];
//                 }
//             }
//         }
//         return maiorNum;
//     }
//      console.log('O maior numero é '+maiorNumMatriz([[1,2,3,41,54,124,61,23],[1,412,51,32,23,56,123,156]]));

// data de hoje
let data = new Date();
let day = data.getDate();
let month = data.getMonth()+1;
let year = data.getFullYear();
console.log(day+'/'+month+'/'+year);


// ENCONTRAR A QUANTIDADE DE MILISEGUNDOS ENTRE AS DATAS
let data1 = new Date();
data.setDate()+2;
let diferenca =Math.abs(data.getDate() - data1.getDay());
console.log(diferenca)
        