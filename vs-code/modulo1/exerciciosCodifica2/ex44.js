// Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número

function stringProperties(obj){
    let quantityOfStringPropertie = 0;
    for (const key in obj) {
        if(typeof obj[key] === 'string'){
            quantityOfStringPropertie++;
        }
    }
    return quantityOfStringPropertie;
}


let obj1 = {
    nome: 'Carlos',
    idade: 20,
    sexo: 'M',
    corOlhos: 'Castanho'
 }


console.log('This object have '+stringProperties(obj1)+' strings');