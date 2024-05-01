// Desenvolva uma função que verifique se uma palavra é um
//  palíndromo (lê-se da mesma forma da esquerda para a direita e vice-versa). 
// Retorne true se for um palíndromo e false se não for.

function isPalindromo(texto){
    const textInversed = texto.split('').reverse().join('');
    return texto == textInversed;
}

let str = 'level';
console.log(isPalindromo(str));
