document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".botoes .botao");
    const personagens = document.querySelectorAll(".personagem");

    botoes.forEach((botao, index) => {
        botao.addEventListener("click", function () {
            
            botoes.forEach((b) => b.classList.remove("selecionado"));
            
            botao.classList.add("selecionado");

            
            personagens.forEach((personagem) => personagem.style.display = "none");

           
            personagens[index].style.display = "block";
        });
    });
});

