
        //Obtém as referencias dos botoes
        const botao_aluno = document.getElementById("botao_aluno");
        const botao_professor = document.getElementById("botao_professor");
        
        //Obtém as referencias dos conteúdos
        const conteudo_aluno = document.getElementById("conteudo_aluno");
        const conteudo_professor = document.getElementById("conteudo_professor");

        //Inicializa a tela com os dois conteúdos ocultos
        conteudo_aluno.style.display = "none";
        conteudo_professor.style.display = "none";

        //Adiciona evento aos botões do top da página
        botao_aluno.addEventListener('click', mostrarAluno);
        botao_professor.addEventListener('click', mostrarProfessor);
        
        function mostrarAluno(){
            console.log("mostrarAluno");
            conteudo_aluno.style.display = "";
            conteudo_professor.style.display = "none";
        }

        function mostrarProfessor(){
            console.log("mostrarProfessor");
            conteudo_aluno.style.display = "none";
            conteudo_professor.style.display = "";
        }

        //Obtém as referencias dos botoes criar Aluno e Professor
        const botao_criar_aluno = document.getElementById("botao_criar_aluno");
        const botao_criar_professor = document.getElementById("botao_criar_professor");

        //Adiciona evento aos botões de criar
        botao_criar_aluno.addEventListener('click', criarAluno);
        botao_criar_professor.addEventListener('click', criarProfessor);

        function criarAluno(){
            const name = prompt('Digite o nome do aluno');

            const aluno = document.createElement('p');
            const no = document.createTextNode(`Aluno: ${name}`);
            aluno.appendChild(no);

            conteudo_aluno.insertBefore(aluno, botao_criar_aluno);
        }

        function criarProfessor(){
            const name = prompt('Digite o nome do professor');

            const professor = document.createElement('p');
            const no = document.createTextNode(`Professor: ${name}`);
            professor.appendChild(no);

            conteudo_professor.insertBefore(professor, botao_criar_professor);
        }