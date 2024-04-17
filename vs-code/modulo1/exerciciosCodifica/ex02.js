//Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.
const prompt = require('prompt-sync')();

let qntdEleitores = prompt('Quantos eleitores: ');
let votosBrancos = prompt('Desses eleitores quantos foram votos brancos: ');
let votosNulos = prompt('Desses eleitores quantos foram votos nulos: ');
let votosValidos = prompt('Desses eleitores quantos foram votos válidos: ');

let brancosPorcentagem = (votosBrancos/qntdEleitores)*100 ;
let nulosPorcentagem = (votosNulos/qntdEleitores) *100;
let validosPorcentagem = (votosValidos/qntdEleitores)*100 ;

console.log(brancosPorcentagem+'% de votos brancos');
console.log(nulosPorcentagem+'% de votos nulos');
console.log(validosPorcentagem+'% de votos válidos');