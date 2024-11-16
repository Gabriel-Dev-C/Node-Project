// PARA EXECUTAR O ARQUIVO: 
// PRIMEIRO: npx tsc
// SEGUNDO: node dist/index.js

const number : number = 18;

if (number >= 20) {
    console.log('Number are greater than 18');
} else {
    console.log('Number are less than 18');
}

console.log('\nHello World', number);

let salario : number = 4500
let imposto : number

if (salario <= 1904){
    imposto = 0.0  
}
else if (salario <= 2826){
    imposto = (salario - 1904) * 0.075
}
else if (salario <= 3751){
    imposto = (salario - 2826) * 0.15 + (2826 - 1904) * 0.075
}
else if (salario <= 3751){
    imposto = (salario - 2826) * 0.15 + (2826 - 1904) * 0.075
}
else if (salario <= 4664){
    imposto = (salario - 3751) * 0.225 + (3751 - 2826) * 0.15 + (2826 - 1903) * 0.075
}
else {
imposto = (salario - 4664.68) * 0.275 + (4664.68 - 3751.05) * 0.225 + (3751.05 - 2826.65) * 0.15 + (2826.65 - 1903.98) * 0.075
}

console.log("\n",imposto)

let pessoa : Object = {'nome': 'Lucas', 'idade': 18, 'ativo': true, 'salario': 1000.00};

let nome : string = 'João';
let idade : number = 18;
let ativo : boolean = true;
let valor : number = 1000.00;

console.log('\n');
console.log(pessoa);
console.log(nome);
console.log(idade);
console.log(ativo);
console.log(valor);

console.log('\n');
let nome2 : string = 'Lucas';
let idade2 = 18;

console.log("\nNome 2: ",nome2);
console.log("Idade 2: ",idade2);

function CriarMsg(nome : string): string {
    return 'Olá, ' + nome;
}

console.log(CriarMsg('Lucas'));

function showName() {
     // Get the input element by ID
     const nameInput = document.getElementById('name') as HTMLInputElement;

     // Check if the input element exists
     if (nameInput) {
         // Get the value of the input element
         const nameValue = nameInput.value;
 
         // Use the value in a variable
         const message = `Olá, ${nameValue}!`;
 
         // Display the message in the span element
         const spanName = document.getElementById('spanName');
         if (spanName) {
             spanName.innerText = message;
         }
     }
}

console.log('\n');

function convertToFahreinheit(celsius: number) : number {
    let fahreinheit = (celsius * 9/5) + 32;
    return fahreinheit;
}

console.log(convertToFahreinheit(30));