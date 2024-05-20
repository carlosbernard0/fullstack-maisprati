// Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

let dados = {
    nome: 'Carlos',
    idade: 20,
    bens: new Array()
}
dados.bens.push('Carro', 'Casa', 'Computador');

function newObject(object){
    for (const key in object) {
        if (object[key].constructor !== Array) {
            delete object[key]
        }
    }
    return object;
}
newObject(dados)
console.log(dados);
