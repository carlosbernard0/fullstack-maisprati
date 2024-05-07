// Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
// Ex.: 1, 1, 2, 3, 5, 8, 13, 21.

function Fibonacci(n){
    if (n <= 1){
        return n;
    }else{
        return Fibonacci(n-1)+Fibonacci(n-2);
    }
}

for (let i = 0; i < 10; i++) {
    console.log(Fibonacci(i));
}
