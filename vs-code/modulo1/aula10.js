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

// pesquisa binaria
// const prompt = require('prompt-sync')();
// let listNuns = [1,2,3,4,5,6,7,8,9,10];
// let optionNum = prompt('Digite um numero de 1 a 10 para ver em qual posicao da lista ele esta: ');

// let binarySearch = (list,num)=>{
//     let lowValue = 1;
//     let highValue = list.length;
//     while(lowValue <= highValue){
//         let mid = Math.floor((lowValue+highValue)/2);
//         let guess = mid
//         if(num > mid){
//             lowValue = mid+1;
//         }else if(num < mid){
//             highValue = mid -1;
//         }else{
//             return guess;
//         }
//     }

//     return null;    
// }
// console.log(binarySearch(listNuns,optionNum));



//spread and rest

let soma=(...numeros)=>{
    let sum = 0;
    for (const num of numeros) {
        sum+=num;
    }
    return sum;
}

console.log(soma(1,2,3));