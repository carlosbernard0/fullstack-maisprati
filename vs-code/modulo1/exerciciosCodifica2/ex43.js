// Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.

 let obj1 = {
    nome: 'Carlos',
    idade: 20,
    sexo: 'M',
    corOlhos: 'Castanho'
 }

 let obj2 = {
    nome: 'Carla',
    idade: 13,
    sexo: 'F',
    etnia: 'Branca'
 }

 function newObj(o1,o2){
    let object = {}
    for (const key1 in o1) {
        for (const key2 in o2) {
            if(key1 == key2){
                object[key2] = o2[key2];
                console.log('obeject add : '+ key2 +' = ' +o2[key2]);
            }else{
                object[key2] = o2[key2];
                object[key1] = o1[key1];
            }
        }
    }
    return object;
 }

 let object = newObj(obj1,obj2)
console.log(object);