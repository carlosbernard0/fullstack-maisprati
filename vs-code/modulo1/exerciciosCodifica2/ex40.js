// Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. Compare os números das apostas com o
// resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)

let result = new Array(5);
for (let i = 0; i < result.length; i++) {
    result[i] = Math.floor(Math.random()*5)+1;
}
console.table(result);

let apostas = new Array(50);
for (let i = 0; i < apostas.length; i++) {
    apostas[i] = new Array(5);
    for(let j = 0; j < apostas[i].length; j++){
        apostas[i][j] = Math.floor(Math.random()*5)+1;  
    }
}
console.table(apostas);

for (let i = 0; i < apostas.length; i++) {
    let cont = 0;
    for (let j = 0; j < apostas[i].length; j++) {
        if(result[j] == apostas[i][j]){
            cont++;
        }
        
    }
    if(cont == 5){
        console.log('Ganhador!!');
    }
    
}


