import {movimentar} from '../types/movimentar'

export class Aluno {
nome: string;
idade: number;
constructor(_nome: string, _idade:number) {
this.nome = _nome;
this.idade = _idade;
}
andar(direcao:movimentar) {
console.log("Aluno(a) esta andando na direção: ", direcao);
}
chorar(qtdLitros: number) {
console.log(`${this.nome} chorou ${qtdLitros} litros de lágrimas.`)
}
detalhar(){
console.log(`O estudante ${this.nome} tem
a idade ${this.idade}`);
}}