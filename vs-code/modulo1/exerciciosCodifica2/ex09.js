// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário

const prompt = require('prompt-sync')();
let listaFuncionariosHomens =[];
let listaFuncionariosMulheres =[];
let continuar = 1;
while(continuar != 0){
    console.log('Preencha os dados de um funcionario')
    let salario = parseInt(prompt('Quanto o funcionario ganha:'));
    let sexo = prompt('Qual é o sexo(M,F): ');
    let funcionario = {
        salario: salario,
        sexo: sexo
    }
    if(sexo = 'M'){
        listaFuncionariosHomens.push(funcionario);
    }else if(sexo == 'F'){
        listaFuncionariosMulheres.push(funcionario);
    }
    let opcao = prompt('Deseja continuar?(S ou N) ');
    if(opcao == 'S'){
        continuar++
    }else if(opcao == 'N'){
        continuar = 0;  
    }
}
let salarioM = 0;
let salarioF = 0;

for (const funcionario of listaFuncionariosHomens) {
    if(funcionario.sexo == 'F'){
        let salario = funcionario.salario;
        salarioF+=salario;
    }else if(funcionario.sexo == 'M'){
        let salario = funcionario.salario;
        salarioM += salario;
    }
}

console.log('O total dos funcionarios do sexo masculino é: R$'+salarioM);
console.log('O total dos funcionarios do sexo feminino é: R$'+salarioF);



    
