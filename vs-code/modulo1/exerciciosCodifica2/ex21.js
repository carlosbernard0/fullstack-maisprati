// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
// = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

function pesoIdeal(altura, sexo){
    let peso;
    if(sexo == 'M'){
        peso = 72.7*altura - 58;
    }else if( sexo == 'F'){
        peso = 62.1*alt-44.7;
    }
    return peso;
}

console.log('O peso ideal é '+ pesoIdeal(1.8,'M').toFixed(2));