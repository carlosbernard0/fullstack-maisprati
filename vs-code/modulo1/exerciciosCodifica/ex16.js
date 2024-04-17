// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.


let qntdNumeros = 0;
let numero = 100;
while(qntdNumeros <= 50){
    let numeroDeVezesQueFoiDividido =0;
    for (let i = 1; i < numero; i++) {
        if(numero % i == 0){
            numeroDeVezesQueFoiDividido++;
        }
    }
    if(numeroDeVezesQueFoiDividido == 2){
        qntdNumeros++;
        console.log(numero);
    }
    numero++;
}