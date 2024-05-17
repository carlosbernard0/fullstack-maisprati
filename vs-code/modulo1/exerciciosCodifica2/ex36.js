// Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
// do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
// número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o
// número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR"

let numsLoteriaEsportiva = new Array(13);
for (let i = 0; i < numsLoteriaEsportiva.length; i++) {
    numsLoteriaEsportiva[i] = Math.floor((Math.random()*50)+1);
}

let apostadores = new Array(100);
let pontuacaoApostadores = new Array(100);

for (let i = 0; i < apostadores.length; i++) {
    apostadores[i] = new Array(13);
    let pontuacao=0;
    for (let j = 0; j < apostadores[i].length; j++) {
        apostadores[i][j] = Math.floor((Math.random()*50)+1);
        if(apostadores[i][j] == numsLoteriaEsportiva[j]){
            pontuacao++;
        }
    }
    pontuacaoApostadores[i] = pontuacao; 
}

console.log('Numeros do sorteio '+numsLoteriaEsportiva);
console.table(apostadores);
console.log('Pontuacao dos apostadores: '+pontuacaoApostadores);

for (let i = 0; i < apostadores.length; i++) {
    console.log('O apostador '+(i+1)+' tem a pontuação '+ pontuacaoApostadores[i]);
    if(pontuacaoApostadores[i] == 13){
        console.log('Parabéns apostador '+(i+1)+ 'você atingiu a pontuação máxima...');
    }    
}
