// Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
// idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
// nome e idade.

let pessoa = {
    nome: 'Carlos',
    idade: 20 
}

console.log(pessoa.nome+' é uma pessoa com a idade de '+pessoa.idade+' anos');

pessoa.email = 'carlosbernardo774@gmail.com';

console.log(pessoa.email);