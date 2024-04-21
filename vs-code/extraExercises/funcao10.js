// Crie uma função que calcule o fatorial de um número.
//  Utilize essa função para calcular o fatorial de diferentes números.

function calculateFactorial(num){
    let result = 1;
    for (let i = num; i>0; i--) {
        result *= i;       
    }
    return result;
}

console.log(calculateFactorial(5));