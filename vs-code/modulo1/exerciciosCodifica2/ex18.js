// Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um
// funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();

let funcionario = {
    nome: 'Igor',
    cargo: 'Dev',
    salario: 4000
}

console.log('Seu nome: '+funcionario.nome);
console.log('Seu cargo: '+funcionario.cargo);
console.log('Seu salario: '+funcionario.salario);
