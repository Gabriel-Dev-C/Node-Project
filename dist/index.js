"use strict";
// PARA EXECUTAR O ARQUIVO: 
// PRIMEIRO: npx tsc
// SEGUNDO: node dist/index.js
const number = 18;
if (number >= 20) {
    console.log('Number are greater than 18');
}
else {
    console.log('Number are less than 18');
}
console.log('Hello World', number);
let salario = 4500;
let imposto;
if (salario <= 1904) {
    imposto = 0.0;
}
else if (salario <= 2826) {
    imposto = (salario - 1904) * 0.075;
}
else if (salario <= 3751) {
    imposto = (salario - 2826) * 0.15 + (2826 - 1904) * 0.075;
}
else if (salario <= 3751) {
    imposto = (salario - 2826) * 0.15 + (2826 - 1904) * 0.075;
}
else if (salario <= 4664) {
    imposto = (salario - 3751) * 0.225 + (3751 - 2826) * 0.15 + (2826 - 1903) * 0.075;
}
else {
    imposto = (salario - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075;
}
console.log(imposto);
let pessoa = { 'nome': 'Lucas', 'idade': 18, 'ativo': true, 'salario': 1000.00 };
let nome = 'João';
let idade = 18;
let ativo = true;
let valor = 1000.00;
console.log(pessoa);
console.log(nome);
console.log(idade);
console.log(ativo);
console.log(valor);
//# sourceMappingURL=index.js.map