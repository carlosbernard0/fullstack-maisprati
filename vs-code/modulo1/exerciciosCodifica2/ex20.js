// Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:Nome:Salário bruto:Dedução INSS:Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).

let empregadoFactory = function(matricula,nome,salarioBruto){
    return{
        matricula, 
        nome,
        salarioBruto,
    }
}

let empregados = [];
let empregado1 = empregadoFactory(1,'Carlos',1000);
let empregado2 = empregadoFactory(2,'Bernardo',3000);
empregados.push(empregado1);
empregados.push(empregado2)

function lerEmpregados(empregados){
    for (const funcionario in empregados) {
        let salarioBrutoFuncionario = empregados[funcionario].salarioBruto;
        empregados[funcionario].deducaoINSS = (salarioBrutoFuncionario*12)/100;
        empregados[funcionario].salarioLiquido =(salarioBrutoFuncionario - empregados[funcionario].deducaoINSS);
    }
    return empregados;
}

lerEmpregados(empregados);
for (let i = 0; i < empregados.length; i++) {
    console.log('Funcionario '+(i+1)+':')
    console.log('Matrícula: '+ empregados[i].matricula);
    console.log('Nome: '+ empregados[i].nome);
    console.log('Salário bruto: '+ empregados[i].salarioBruto);
    console.log('Dedução INSS: '+ empregados[i].deducaoINSS);
    console.log('Salário líquido: '+ empregados[i].salarioLiquido);
    console.log();
    
}
