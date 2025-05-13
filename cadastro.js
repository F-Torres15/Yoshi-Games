document.addEventListener("DOMContentLoaded", function () {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const senha = document.getElementById("senha");
  const confirmarSenha = document.getElementById("confirmarSenha");
  const botao = document.getElementById("btnCadastro");
  const mensagemErro = document.getElementById("mensagem-erro");

  botao.addEventListener("click", function () {
    if (!nome.value || !email.value || !senha.value || !confirmarSenha.value) {
      mensagemErro.textContent = "Preencha todos os campos.";
      return;
    }

    if (senha.value.length < 6) {
      mensagemErro.textContent = "A senha deve ter no mínimo 6 caracteres.";
      return;
    }

    if (senha.value !== confirmarSenha.value) {
      mensagemErro.textContent = "As senhas não coincidem.";
      return;
    }

    // Aqui você pode simular o cadastro com sucesso
    mensagemErro.style.color = "green";
    mensagemErro.textContent = "Cadastro realizado com sucesso! Redirecionando...";
    
    // Redireciona após 1,5 segundos
    setTimeout(() => {
      window.location.href = "login.html"; // ou para uma página de boas-vindas, se preferir
    }, 1500);
  });
});
