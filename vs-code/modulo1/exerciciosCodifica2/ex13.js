// Crie um programa que preencha automaticamente (usando lógica, não apenas
// atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
// da sequência de Fibonacci

let vetorFibonacci =[];

function fibonacci(n){
    if(n <=1){
        return 1;
    }else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

for (let i = 0; i < 15; i++) {
    vetorFibonacci[i] = fibonacci(i);    
}

console.log(vetorFibonacci);