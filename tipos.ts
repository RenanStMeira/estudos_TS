// Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 31;

//String
const nome: string = 'Renan';

//Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [22, 45, 50,31];

//Tuple 
let jogadores: [string, string, string, number];
jogadores = ['Renan', 'Arthur', 'Lucas', 10];

//Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado; 

//Any (qualquer coisa)
const retornoDaAPI: any[] = [123, 'Renan', false];

//Void (funçao nao tem retorno)
function printarNaTela(msg: string): void {
    console.log(msg);
};

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(Object: object) {

}
criar({
    propiedade: 1
})

//Never
function loopInfinito(): never {
    while (true) { }
};

function erro(mensagen: string): never {
    throw new Error(mensagen)
};

//Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
} ;

exibirNota('10');
exibirNota(10);

//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
};

// type Funcionarios = Array<Funcionario> 
const funcionarios: Funcionario [] = [{
    nome: 'Renan',
    sobrenome: 'Meira',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionario: ', funcionario.nome);
    }
};

// Valores nulos ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string | null;  // ? campo opcional
}

const contato: Contato = {
    nome:'Renan',
    telefone1: '123654789',
    // telefone2: null
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = document.getElementById('numero1') as HTMLInputElement;
console.log(input.value);

