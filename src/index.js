// PARA EXECUTAR O ARQUIVO: 
// PRIMEIRO: npx tsc
// SEGUNDO: node dist/index.js
var number = 18;
if (number >= 20) {
    console.log('Number are greater than 18');
}
else {
    console.log('Number are less than 18');
}
console.log('\nHello World', number);
var salario = 4500;
var imposto;
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
console.log("\n", imposto);
var pessoa = { 'nome': 'Lucas', 'idade': 18, 'ativo': true, 'salario': 1000.00 };
var nome = 'João';
var idade = 18;
var ativo = true;
var valor = 1000.00;
console.log('\n');
console.log(pessoa);
console.log(nome);
console.log(idade);
console.log(ativo);
console.log(valor);
console.log('\n');
var nome2 = 'Lucas';
var idade2 = 18;
console.log("\nNome 2: ", nome2);
console.log("Idade 2: ", idade2);
function CriarMsg(nome) {
    return 'Olá, ' + nome;
}
function showName() {
    // Get the input element by ID
    var nameInput = document.getElementById('name');
    // Check if the input element exists
    if (nameInput) {
        // Get the value of the input element
        var nameValue = nameInput.value;
        // Use the value in a variable
        var message = "Olá, ".concat(nameValue, "!");
        // Display the message in the span element
        var spanName = document.getElementById('spanName');
        if (spanName) {
            spanName.innerText = message;
        }
    }
}
