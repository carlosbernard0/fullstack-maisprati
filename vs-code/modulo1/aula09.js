// const monitor= {
//      marca : 'AOC',
//      valor: 500,
//      ligado: false,
//      cor: 'black',
//      ligar : function(){
//         this.ligado = true;
//         return 'o monitor está ligado: '+this.ligado;
//      },
//      desligar: function(){
//         this.ligado= false;
//         return 'o monitor está ligado: '+this.ligado;
//      }
// };

// for (const chave in monitor) {
//     console.log(chave+': '+monitor[chave]);
// }

// let elementos = [10,20,100];
// for (const numero of elementos) {
//     console.log(numero);
// }


// const veiculo = {
    
// };

// const veiculo1 = {
    
// };

// let listaDeVeiculos = [{
//         nome: 'Ômega',
//         modelo: 'CD'
//     },{
//         nome : 'Vectra',
//         modelo: 'GLS '
//     }
// ];


// for (const veiculo in listaDeVeiculos) {
//     console.log(listaDeVeiculos[veiculo]);
// }

// for (const veiculo of listaDeVeiculos) {
//     console.log(veiculo.modelo);
// }

//Construa um array de números e calcule a soma total dos números e também imprima 
// cada número multiplicado por dois.

let numeros = [1,2,3,4,5];

let somaTotal = 0;
numeros.forEach((num)=>{
    somaTotal+=num;
    console.log ('Numero '+num+' * 2 é: '+parseInt(num*2));
});
console.log('Soma total: '+somaTotal);
