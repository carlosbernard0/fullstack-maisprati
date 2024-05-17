// Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

let G = new Array(20);
let options = ['A','B','C','D','E'];

for (let i = 0; i < G.length; i++) {
    let randomNum = Math.floor(Math.random()*5);
    G[i] = options[randomNum];
}
console.table(G);

let students = new Array(50);
for (let i = 0; i < students.length; i++) {
    let correctAnswers = 0;
    students[i] = new Array(G.length);
    for (let j = 0; j < students[i].length; j++) {
        let randomNum = Math.floor(Math.random()*5);
        students[i][j] = options[randomNum];
        if(students[i][j] == G[j]){
            correctAnswers++;
        }
    }
    if(correctAnswers >= 12){
        console.log('Aluno '+(i+1)+' aprovado!!');
    }else{
        console.log('Aluno '+(i+1)+' reprovado!!');
    }
}

