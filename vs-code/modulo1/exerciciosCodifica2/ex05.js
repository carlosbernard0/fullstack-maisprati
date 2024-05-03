// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
const prompt = require('prompt-sync')();
let escolhaDoUsuario;
let escolhaDoComputador;
let opcoes = ['pedra','papel','tesoura'];
do{
    escolhaDoUsuario = prompt('Para jogar JoKenPo digite qual você deseja escolher(pedra,papel,tesoura):');
    console.log('Usuario escolheu: '+escolhaDoUsuario);
    for (const escolha of opcoes) {
        if(escolha == escolhaDoUsuario){
            opcoes.splice(escolha);
            console.log(escolha+' removido com sucesso');
        };
    }
    escolhaDoComputador = Math.round(Math.random());
        for (let i = 0; i < opcoes.length; i++) {
            if(i==escolhaDoComputador){
                escolhaDoComputador = opcoes[i];
                console.log('Computador escolheu: '+escolhaDoComputador);
            }
        }

}while((escolhaDoUsuario != 'pedra') && (escolhaDoUsuario != 'papel') && (escolhaDoUsuario != 'tesoura'));

if((escolhaDoUsuario == 'papel' && escolhaDoComputador == 'pedra') ||(escolhaDoUsuario == 'pedra' && escolhaDoComputador == 'tesoura')|| (escolhaDoUsuario == 'tesoura' && escolhaDoComputador == 'papel')){
    console.log('Usuario ganhou!!');
}else{
    console.log('Computador ganhou!!');
}