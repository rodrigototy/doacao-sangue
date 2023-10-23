// Exibir e ocultar formulário //
const botaoExibirFormulario = document.getElementById("botao-exibir-formulario");
const formulario = document.getElementById("formulario");

botaoExibirFormulario.addEventListener("click", function() {
    if (formulario.style.display === "none" || formulario.style.display === "") {
        formulario.style.display = "block";
    } else {
        formulario.style.display = "none";
    }
});

