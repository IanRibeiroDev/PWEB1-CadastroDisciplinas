class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(nome, codigo) {
        if(isNaN(codigo)) {
            throw new Error("Informe um codigo numerico!");
        }

        const jaExiste = this.repositorio.listar().filter(disciplina => disciplina.codigo == codigo);
        if(jaExiste.length > 0) {
            throw new Error("Disciplina ja cadastrada!");
        }

        const novaDisciplina = new Disciplina(codigo, nome);
        this.repositorio.inserir(novaDisciplina);
    }

    inserirAluno(matriculaAluno, codigoDisciplina) {
        //aluno e disciplina precisam existir
        const disciplina = this.repositorio.listar().filter(disciplina => disciplina.codigo === codigoDisciplina);
        if(disciplina.length === 0) {
            throw new Error("Disciplina inexistente!");
        }

        const aluno = controladorAluno.servico.pesquisarPorMatricula(matriculaAluno);
        if(aluno.length == 0) {
            throw new Error("Aluno inexistente!");
        }

        //nao permite a insercao de um aluno mais de uma vez
        if(disciplina[0].alunos.indexOf(aluno[0]) != -1) {
            throw new Error("Aluno ja cadastrado na disciplina!")
        }

        this.repositorio.inserirAluno(aluno[0], disciplina[0])
        return aluno[0];
    }

    pesquisarPorCodigo(codigo) {
        const resultado = this.repositorio.listar().filter(disciplina => disciplina.codigo === codigo);

        if (resultado.length == 0) {
            throw new Error("Disciplina inexistente!");
        }

        return resultado[0];
    }

    alterarNome(novoNome, codigo) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        const indice = this.repositorio.disciplinas.indexOf(disciplina);
        this.repositorio.alterarNome(indice, novoNome);
    }

    remover(codigo) {
        const disciplina = this.pesquisarPorCodigo(codigo);
        const indice = this.repositorio.disciplinas.indexOf(disciplina);
        this.repositorio.remover(indice);
    }

    listar() {
        return this.repositorio.listar();
    }
}