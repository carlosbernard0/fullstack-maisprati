// Implemente uma função que inverta a ordem dos elementos em um array.
//  Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.

function invertList(vector){
    let list= Array();
    for (let i = vector.length-1; i >= 0; i--) {
        list.push(vector[i]);
    }
    return list;
}
let elements = [1,2,3,4];
console.log(invertList(elements));