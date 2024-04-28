// FORIN
// const professor = {
//     nome: 'Tony Stark',
//     materia: 'Matematica',
//     notas: {
//         aluno1: 3.5,
//         aluno2: 4.0,
//         aluno3: 2.8
//     }
// }

// let somaDasNotas = 0;
// let numeroDosAlunos = 0;

// for (const aluno in professor.notas) {
//     console.log(aluno +': '+professor.notas[aluno]);
//     somaDasNotas+=professor.notas[aluno];
//     numeroDosAlunos++;
// }

// let media = somaDasNotas/numeroDosAlunos;
// if(media < 3.0){
//     console.log('Os alunos nao passaram!');
// }else{
//     console.log(`A media das notas é ${media.toFixed(2)}`);
// }

// FOROF
// const biblioteca = [
//     {titulo: '12 Regras para Vida', autor: 'Jordan Peterson', ano: 1925 },
//     {titulo: 'O Hobbit', autor: 'J.R.R. Tolkien', ano: 1937},
//     {titulo: 'Senhora do Jogo', autor: 'Sidney Sheldon', ano: 2009},
//     {titulo: 'Zé Carioca', autor: 'Disney', ano: 1940},
//     {titulo: 'Nação Dopamina', autor: 'Anna Lembke', ano: 2011}
// ]

// for (const livro of biblioteca) {
//     if((livro['ano'])< 2000){
//         console.log('Livro '+livro.titulo+' do ano: '+livro['ano']);
//     };
// }

// FOREACH
// const filmes = [
//     {titulo: "Tropa de Elite", genero: "Ação"},
//     {titulo: "Capitão Fantástico", genero: "Drama"},
//     {titulo: "O Poderoso Chefão", genero: "Crime"},
//     {titulo: "Clube da Luta", genero: "Drama"},
//     {titulo: "Oppenheimer", genero: "Biografia"},
//     {titulo: "High School Musical", genero: "Musical"},
//     {titulo: "Barbie", genero: "Live action"},
// ]

// const contagemGeneros = {};

// filmes.forEach(filme=>{
//     if(contagemGeneros[filme.genero]){
//         contagemGeneros[filme.genero]++;
//     }else{
//         contagemGeneros[filme.genero] = 1;
//     }
// })

// for (const genero in contagemGeneros) {
//     console.log(genero+': '+contagemGeneros[genero]);
// }

// PESQUISA BINARIA
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const prompt = require('prompt-sync')()
let optionNum = parseInt(prompt('Digite o numero de 1 a 20:')); 


function pesquisaBinaria(list, num){
    let checkNumber = false;
    let moreOrLessNumber = parseInt(list.length);
    moreOrLessNumber/=2;

    while(!checkNumber){
        if(num < moreOrLessNumber){
            Math.floor(parseInt(moreOrLessNumber/=2));
        }else if (num > moreOrLessNumber){
            Math.floor(parseInt(moreOrLessNumber+= moreOrLessNumber/2));
        }else{
            console.log('Voce escolheu o numero '+moreOrLessNumber);
            checkNumber = true;
        };
    }

}

pesquisaBinaria(numbers,optionNum)