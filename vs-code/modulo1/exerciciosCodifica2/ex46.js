// Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor

let listSale = [];
let SaleFactory = function(vendedor,valor){
    return{
        vendedor,
        valor
    }
}

let sale1 = SaleFactory('Carlos', 2000);
let sale2 = SaleFactory('Guilherme', 4000);
let sale3 = SaleFactory('Pedro', 6000);
let sale4 = SaleFactory('Carlos', 8000);
let sale5 = SaleFactory('Pedro', 10000);
let sale6 = SaleFactory('Tim berners-lee', 12000);

listSale.push(sale1,sale2,sale3,sale4,sale5,sale6);

function allSallerSum(objects){
    let value = 0
    for (let i = 0; i < objects.length; i++) {
        for (let j = 0; j < objects.length; j++) {
            if(objects[i].vendedor == objects[j].vendedor && objects[i].valor != objects[j].valor){
                value = objects[i].valor + objects[j].valor;
                objects[i].valor = value;
                objects.splice(j,1);
            }
        }
    }
    
}

allSallerSum(listSale);
console.log(listSale);