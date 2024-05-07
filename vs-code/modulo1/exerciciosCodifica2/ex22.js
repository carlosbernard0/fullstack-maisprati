// A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a média de salário da população, a
// média do número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00.

let pessoaFactory = function(salario, qntdFilhos){
    return {
        salario,
        qntdFilhos
    }
}
let pessoasCidade = [];
pessoasCidade.push(pessoaFactory(2000,3));
pessoasCidade.push(pessoaFactory(4000,4));
pessoasCidade.push(pessoaFactory(6500,2));
pessoasCidade.push(pessoaFactory(5000,1));
pessoasCidade.push(pessoaFactory(7500,0));
pessoasCidade.push(pessoaFactory(350,0));

function fazerPesquisa(pessoasCidade){
    let qntdPessoas = pessoasCidade.length;
    let somaSalarios= 0;
    let somaFilhos= 0;
    let maiorSalario = 0;
    let pessoasComSalario350PraMenos=0;

    for (const pessoas of pessoasCidade) {
        let salarioDaPessoa = pessoas.salario
        somaSalarios+=salarioDaPessoa;
        if(salarioDaPessoa > maiorSalario){
            maiorSalario = salarioDaPessoa;
        }
        if(salarioDaPessoa <= 350){
            pessoasComSalario350PraMenos++;
        }
        let qntdFilhosDaPessoa = pessoas.qntdFilhos;
        somaFilhos+=qntdFilhosDaPessoa;
    }

    let mediaSalario = (somaSalarios/qntdPessoas);
    let mediaFilhos = (somaFilhos/qntdPessoas);
    let porcentagemPessoasComSalario350 = (pessoasComSalario350PraMenos/qntdPessoas)*100;

    return `Média salarial da população R$${mediaSalario.toFixed(1)} por pessoa e de filhos é ${mediaFilhos.toFixed(1)} por pessoa. O maior salario sendo ${maiorSalario}, e o porcentual as pessoas com salario até R$350,00 = ${porcentagemPessoasComSalario350.toFixed(1)}%`;
}
console.log(fazerPesquisa(pessoasCidade));