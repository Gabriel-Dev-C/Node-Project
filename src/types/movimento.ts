import { Direcao } from './direcao';
import { Movimentacao } from './direcao';

export type Movimento = {
    direcao: Direcao;
    qtdPassos: number;
    movimentacao: Movimentacao;
}