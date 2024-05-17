// Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor

const prompt = require('prompt-sync')();
let nums = new Array(6);
for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.floor(Math.random()*6)+1;
    
}
let selectOption;
let option = 1;
do{
    console.log();
    console.log('Escolha a opcao desejada: ')
    console.log('0- sair; ')
    console.log('1- soma dos elementos; ')
    console.log('2- produto dos elementos; ')
    console.log('3- média dos elementos; ')
    console.log('4- ordene os elementos em ordem crescente; ')
    console.log('5- mostre o vetor; ')

    selectOption = parseInt(prompt('qual opcao vc deseja: '));
    switch(selectOption){
        case 0:
            option=0
            break;
        case 1: 
            let soma = 0;
            for (let i = 0; i < nums.length; i++) {
                soma+= nums[i];
            }
            console.log('The sum of all elements is '+ soma);
            break;
        case 2: 
            let multiply = 1;
            for (let i = 0; i < nums.length; i++) {
                multiply*= nums[i];
            }
            console.log('Multiplication of all elements is '+ multiply);
            break;
        case 3: 
            let sum = 0;
            let quantityOfNums = nums.length;
            for (let i = 0; i < nums.length; i++) {
                sum+= nums[i];
            }
            console.log('Average of all elements is '+ (sum/quantityOfNums).toFixed(2));
            break;
        case 4: 
            function orderList(list){
                let ordained = false;
                let listOrdained =[];
                let tamanho = list.length
                while(!ordained){
                    let lowerNum = 10;
                    for (let i = 0; i < list.length; i++) {
                        if(list[i] < lowerNum){
                            lowerNum = nums[i];
                        }
                    }
                    for (let i = 0; i < list.length; i++) {
                        if(list[i] == lowerNum){
                            list.splice(i,1);
                        }
                    }
                    listOrdained.push(lowerNum);
                    if(listOrdained.length == tamanho){
                        ordained = true;
                    }
                }
                list.push(...listOrdained);
                return listOrdained;
            }

            console.log('Elements ordained: '+ orderList(nums));
            break;
        case 5: 
            console.log(nums);
            break;
    }


}while(option != 0);
