// Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const prompt = require('prompt-sync')();

let valoresASeremLidos = 30;
let auxInitial = 1;

let listEven = [];
let listOdd = []
while(auxInitial <= valoresASeremLidos){
    let num = prompt('Write a value: ');
    if(num %2 == 0){
        listEven.push(num);
    }else{
        listOdd.push(num);
    }

    if(listEven.length == 5){
        console.log(listEven);
        for (let i = 0; i < listEven.length; i++) {
            listEven.pop();
        }
    };

    if(listOdd.length == 5){
        console.log(listOdd);
        for (let i = 0; i < listOdd.length; i++) {
            listOdd.pop();
        }
    };
    auxInitial++;
}