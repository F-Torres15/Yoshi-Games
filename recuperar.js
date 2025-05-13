document.addEventListener("DOMContentLoaded", function () {
  const novaSenha = document.getElementById("novaSenha");
  const confirmarSenha = document.getElementById("confirmarSenha");
  const botao = document.querySelector(".btn-login");
  const mensagemErro = document.createElement("p");

  // Estilo da mensagem de erro
  mensagemErro.style.color = "red";
  mensagemErro.style.fontSize = "14px";
  mensagemErro.style.marginTop = "10px";

  // Adiciona a mensagem ao DOM abaixo do botão
  botao.parentNode.insertBefore(mensagemErro, botao.nextSibling);

  botao.addEventListener("click", function () {
    const senha1 = novaSenha.value.trim();
    const senha2 = confirmarSenha.value.trim();

    // Verifica se as senhas estão preenchidas
    if (!senha1 || !senha2) {
      mensagemErro.textContent = "Preencha todos os campos.";
      return;
    }

    // Verifica se tem pelo menos 6 caracteres
    if (senha1.length < 6) {
      mensagemErro.textContent = "A senha deve ter no mínimo 6 caracteres.";
      return;
    }

    // Verifica se as senhas coincidem
    if (senha1 !== senha2) {
      mensagemErro.textContent = "As senhas não coincidem.";
      return;
    }

    // Tudo certo, limpa o erro e redireciona
    mensagemErro.textContent = "";
    window.location.href = "login.html";
  });
});
