//Abrindo os projetos quando o usuário clicar no botão "mostrar mais"

//Verificando quando o usuário clicar no botão 

//Criando uma variável

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

console.log(botaoMostrarProjetos);
console.log(projetosInativos);

botaoMostrarProjetos.addEventListener('click', () => {
    //Adicionando a classe "ativo" nos projetos escondidos
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });
}
