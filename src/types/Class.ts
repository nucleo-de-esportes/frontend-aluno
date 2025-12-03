export interface Turma {
    turma_id: number;
    horario_inicio: string;
    horario_fim: string;
    limite_inscritos: number;
    dia_semana: string;
    sigla: string;
    local: {
        nome: string;
        campus: string;
    };
    modalidade: {
        nome: string;
        valor_aluno: string;
        valor_professor: string;
    };
}