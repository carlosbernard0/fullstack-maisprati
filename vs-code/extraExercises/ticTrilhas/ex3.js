// 3.Escreva um programa que crie dois arrays numéricos, de mesmo tamanho, e
// some, subtraia, multiplique e divida os elementos de um pelos elementos do
// outro,

let sum =[];
let subtract =[];
let multiple =[];
let divide =[];

let list1 = [1,2,3,4,5];
let list2 = [1,2,3,4,5];

for (let i = 0; i < list1.length; i++) {
    sum.push(list1[i]+list2[i]);
    subtract.push(list1[i]-list2[i]);
    multiple.push(list1[i]*list2[i]);
    divide.push(list1[i]/list2[i]); 
            
}

console.log(sum);
console.log(subtract);
console.log(multiple);
console.log(divide);