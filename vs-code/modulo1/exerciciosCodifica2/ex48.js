// Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

let inventarioLojaA = {
    notebook: 4,
    monitor: 5
}
let inventarioLojaB = {
    mouse: 1,
    teclado: 4,
    monitor: 3
}


function joinStores(store1,store2){
    let newObject = {}
    for (const key in store1) {
        for (const key2 in store2) {
            if(key == key2){
                let sum = store1[key] + store2[key2];
                newObject[key] = sum;
            }else{
                newObject[key] = store1[key];
                newObject[key2] = store2[key2];
            }

        }
    }
    return newObject;
}

let object = joinStores(inventarioLojaA,inventarioLojaB);

console.log(object);
