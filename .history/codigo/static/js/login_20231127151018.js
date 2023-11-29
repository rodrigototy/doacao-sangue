document.addEventListener('DOMContentLoaded', function () {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const form = document.getElementById('loginForm');

  togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? '🙈' : '🙉';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar o comportamento de envio padrão

    // Dados estáticos para validação
    const usernameValido = 'usuario123';
    const senhaValida = 'senha123';

    // Dados inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validação das credenciais
    if (username === usernameValido && password === senhaValida) {
      alert('Login realizado com sucesso!');
      // Aqui você pode redirecionar o usuário para outra página ou realizar outras ações após o login bem-sucedido
      window.location.href = 'listar.html';
    } else {
      alert('Usuário ou senha inválidos.');
    }
  });
});
