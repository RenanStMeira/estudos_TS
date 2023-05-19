"use strict";
class Data {
    constructor(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const data = new Data(18, 5, 2023);
console.log(data.dia);
// console.log(data.mes); // privado nao acessa
