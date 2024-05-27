// Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

let listTransitions = [];
let TransitionFactory = function(id,value,date,category){
    return{
        id,value,date,category
    }
}

let trasition1 = TransitionFactory(1,1000,Date.now,'boleto');
let trasition2 = TransitionFactory(2,2000,Date.now,'pix');
let trasition3 = TransitionFactory(3,3000,Date.now,'cartao');
let trasition4 = TransitionFactory(4,1000,Date.now,'boleto');
let trasition5 = TransitionFactory(5,2000,Date.now,'pix');
let trasition6 = TransitionFactory(6,3000,Date.now,'cartao');

listTransitions.push(trasition1,trasition2,trasition3,trasition4,trasition5,trasition6);

function createCategoryObject(list){
    let categoryObj = {}
    for (let i = 0; i < list.length; i++) {
        let listPropertiesObj = []
        let allValue = 0
        for (const key in list[i]) {
            if(key != 'category'){
                if(key == 'value'){
                    allValue+=list[i][key];
                    listPropertiesObj.push(allValue)
                }else{
                    listPropertiesObj.push(list[i][key])
                }
            }
            if(key == 'category'){
                if(categoryObj[list[i][key]] == list[i][key]){
                    categoryObj[list[i][key]]
                }else{
                    categoryObj[list[i][key]] = listPropertiesObj;
                }
            }
                    
        }
    }
    for (const key in categoryObj) {
        for (let i = 0; i < list.length; i++) {
            if(list[i].category == key && list[i].id != categoryObj[key][0]){
                categoryObj[key][1] += list[i].value;
            }
        }
        
    }
    return categoryObj;
}


console.log(createCategoryObject(listTransitions));
