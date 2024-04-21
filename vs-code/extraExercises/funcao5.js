// Desenvolva uma função que determine se um número é primo ou não.
//  Retorne true se for primo e false se não for.

function isPrime(num){
    let divideNumPrime = 0;
    for (let i = 1; i <= num; i++) {
        if(num%i == 0){
            divideNumPrime++;
        }
    }
    if(divideNumPrime == 2){
        return 'is prime';
    }else{
        return 'is not prime';
    }
}

let num = 3;

console.log(isPrime(num));
