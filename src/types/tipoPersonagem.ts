import { Movimento } from './movimento';

type classePersonagem = 'guerreiro' | 'mago' | 'arqueiro' | 'ladrao';

export type tipoPersonagem = {
    nome: string;
    classe: classePersonagem;
    vida: number;
    ataque: number;
    defesa: number;
    movimento: Movimento;
}