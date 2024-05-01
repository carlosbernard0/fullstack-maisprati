// Crie um programa que liste um arrays de objetos, sendo que os objetos são:
// Usuario com: Nome, Data de Nascimento, Sexo, Profissão
let PessoaFactory = (nome,dataNascimento,sexo,profissao)=>{
    return{nome,dataNascimento,sexo,profissao}
}

let pessoa1 = PessoaFactory('Carlos','2003-11-09','Masculino','Dev');
let pessoa2 = PessoaFactory('Carla','2011-01-01','Feminino','Perita criminal');

let pessoas = [];
pessoas.push(pessoa1,pessoa2);

console.log(pessoas);