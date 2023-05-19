class Data {
    public dia: number;
    private mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano:number) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(18, 5, 2023);
console.log(data.dia);
// console.log(data.mes); // privado nao acessa

class Carro {

   private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}

      private alterarvelocidade(delta: number) {
          //Fazer validação de aceleração e frenagem
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
            } else {
                this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
            }
        }

    acelerar() {
        //função para acelerar
        this.alterarvelocidade(5)
       
    }
    //Função para frear
    frear() {
        this.alterarvelocidade(-5)
    }
}

const carro = new Carro('Ford', 'Fiesta', 250);
carro.acelerar();

//Herança
class Camaro extends Carro {
    // Adicionando nova propiedade
    turbo = false;
    
    constructor() {
        // chamar classe pai   
     super('Chevrole', 'Camaro', 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro
camaro.acelerar();
camaro.ligarTurbo();