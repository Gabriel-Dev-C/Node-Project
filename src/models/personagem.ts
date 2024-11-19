import { tipoPersonagem } from "../types/tipoPersonagem";

export class Personagem {
    personagem: tipoPersonagem;
    
    constructor(personagem: tipoPersonagem) {
        this.personagem = personagem;
    }
    movimentar() {
        console.log(`O personagem ${this.personagem.nome} está se movimentando para a direção ${this.personagem.movimento.direcao} com a movimentação ${this.personagem.movimento.movimentacao}`);
    }
    atacar() {
        console.log(`O personagem ${this.personagem.nome} está atacando com ${this.personagem.ataque}`);
    }
    defender() {
        console.log(`O personagem ${this.personagem.nome} está defendendo com ${this.personagem.defesa}`);
    }
    detalhar() {
        console.log(`O personagem ${this.personagem.nome} é um(a) ${this.personagem.classe} e tem ${this.personagem.vida} de vida.`);
    }
}