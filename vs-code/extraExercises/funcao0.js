const prompt = require('prompt-sync')();

let listaFrutas = Array();
listaFrutas.push('Abacaxi','Maçã','Uva','Melão','Mamão','Pera','Morango','Banana','Laranja');

function consultarPosicaoFruta(fruta) {
    let result = listaFrutas.indexOf(fruta);
    return result;
}

let fruta = prompt('Digite alguma fruta para ver se ela existe e sua posição: ');

let posicaoFruta = consultarPosicaoFruta(fruta);
if(posicaoFruta == -1){
    console.log('nós nao possuimos esta fruta na lista!!');
}else{
    console.log('A fruta '+fruta+' esta na posição: '+posicaoFruta);
}

console.log('Ordenando a lista alfabéticamente: {'+listaFrutas.sort()+'}');
