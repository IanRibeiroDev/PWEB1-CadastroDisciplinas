class DisciplinaControlador {
    constructor() {
        this.service = new DisciplinaService();
    }

    inserir() {
        const nome = document.querySelector("#nomeCadastrar");
        const codigo = document.querySelector("#codigoCadastrar");
        const mensagem = document.querySelector("#mensagemCadastrar");

        try{
            this.service.inserir(nome.value, Number(codigo.value));
            mensagem.textContent = "Cadastrada com sucesso!";
        } catch (error) {
            mensagem.textContent = error;
        }
    }

    alterarNome() {
        const nome = document.querySelector("#nomeAlterar");
        const codigo = document.querySelector("#codigoAlterar");
        const mensagem = document.querySelector("#mensagemAlterar");

        try{
            this.service.alterarNome(nome.value, Number(codigo.value));
            mensagem.textContent = "Alterada com sucesso!";
        } catch (error) {
            mensagem.textContent = error;
        }
    }

    remover() {
        const codigo = document.querySelector("#codigoRemover");
        const mensagem = document.querySelector("#mensagemRemover");

        try{
            this.service.remover(Number(codigo.value));
            mensagem.textContent = "Removida com sucesso!";
        } catch (error) {
            mensagem.textContent = error;
        }
    }

    listarDisciplinas() {
        const listaDisciplinas = document.querySelector("#listaDisciplinas");
        listaDisciplinas.innerHTML = "";
        const disciplinas = this.service.listar();

        disciplinas.forEach(disciplina => {const elementoDisciplina = document.createElement("li");
        elementoDisciplina.textContent = `Nome: ${disciplina.nome} - Codigo: ${disciplina.codigo}`;
        listaDisciplinas.appendChild(elementoDisciplina);})
        
    }

    inserirAlunoNaDisciplina() {
        const matriculaAluno = document.querySelector("#matriculaCadastroNaDisciplina");
        const codigoDisciplina = document.querySelector("#codigoInserirAluno");
        const aluno = this.service.inserirAluno(matriculaAluno.value, Number(codigoDisciplina.value));

        const listaAlunos = document.getElementById(`${codigoDisciplina.value}`);
        listaAlunos.textContent += `${aluno.nome}, `;
    }
}