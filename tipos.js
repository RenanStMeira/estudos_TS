"use strict";
// Boolean
const contaPaga = false;
//Number
const idade = 31;
//String
const nome = 'Renan';
//Array
const idades = [23, 28, 45];
const idades2 = [22, 45, 50, 31];
//Tuple 
let jogadores;
jogadores = ['Renan', 'Arthur', 'Lucas', 10];
//Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
//Any (qualquer coisa)
const retornoDaAPI = [123, 'Renan', false];
//Void (funçao nao tem retorno)
function printarNaTela(msg) {
    console.log(msg);
}
;
// Null e Undefined
const u = undefined;
const n = null;
//Object
function criar(Object) {
}
criar({
    propiedade: 1
});
//Never
function loopInfinito() {
    while (true) { }
}
;
function erro(mensagen) {
    throw new Error(mensagen);
}
;
//Union Types
const nota = 5;
function exibirNota(nota) {
    console.log(`A nota é ${nota}`);
}
;
exibirNota('10');
exibirNota(10);
// type Funcionarios = Array<Funcionario> 
const funcionarios = [{
        nome: 'Renan',
        sobrenome: 'Meira',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
;
// Valores nulos ou opcionais
let altura = 1.6;
altura = null;
const contato = {
    nome: 'Renan',
    telefone1: '123654789',
    // telefone2: null
};
//Type Assertion
const minhaIdade = 23;
minhaIdade.toString();
const input = document.getElementById('numero1');
console.log(input.value);
