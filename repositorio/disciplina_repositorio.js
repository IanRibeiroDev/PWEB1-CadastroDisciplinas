class DisciplinaRepositorio{
    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    inserirAluno(aluno, disciplina) {
        const indice = this.disciplinas.indexOf(disciplina);
        this.disciplinas[indice].alunos.push(aluno);
    }

    listar() {
        return this.disciplinas;
    }

    alterarNome(indice, novoNome) {
        this.disciplinas[indice].nome = novoNome;
    }

    remover(indice) {
        this.disciplinas.splice(indice, 1);
    }
}