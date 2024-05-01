// Crie uma função que receba um valor e uma porcentagem como parâmetros. 
// A função deve retornar o valor acrescido da porcentagem indicada.

function valueMorePorcent(value, porcent){
    let result = (value*porcent)/100;
    return result+value;
}

console.log(valueMorePorcent(100,10));