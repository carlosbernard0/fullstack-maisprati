// Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.

let listStr = new Array(5);

for (let index = 0; index < listStr.length; index++) {
    listStr[index] = index;
}
listStr.push(2,5,6,13,5,1,1,1,1,1);

let object = {}

for (let i = 0; i < listStr.length; i++) {
    let quantity = 0;
    for (let j = 0; j < listStr.length; j++) {
        let variable = listStr[i];
        if(variable == listStr[j]){
            quantity++;
        }
    }
    console.log(quantity);
    object[listStr[i]] = quantity;
    
}
console.log(object);