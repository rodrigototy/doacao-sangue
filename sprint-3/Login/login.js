// Este script deve ser colocado no final do corpo do seu documento HTML,
// logo antes da tag de fechamento </body>

document.addEventListener('DOMContentLoaded', function () {
    // Encontrar o contêiner no DOM
    const body = document.body;

    // Criar o HTML como uma string
    const htmlContent = `
    <a href="../index.html" style="position: absolute; top: 20px; left: 20px">
      Voltar para a página inicial
    </a>

    <div class="login-container">
      <div class="blood-drop-icon">&#128148;</div>
      <h2>Hemocentro</h2>
      <p>Acesse sua conta e faça a diferença!</p>
      <form id="loginForm" action="#" method="post">
        <div class="input-group">
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Usuário"
          />
        </div>
        <div class="input-group">
          <input
            type="password"
            id="password"
            class="password-input"
            placeholder="Senha"
            required
          />
          <span id="togglePassword" class="toggle-password">🙈</span>
        </div>
        <button type="submit">Entrar</button>
      </form>
      <a href="#" class="forgot-password">Esqueci minha senha</a>
    </div>
  `;

    // Definir o conteúdo HTML do corpo
    body.innerHTML = htmlContent;

    // Adicionar o manipulador de eventos de envio para o formulário
    onSubmit();

    // Adicionar o manipulador de eventos de clique para o botão de alternância da senha
    onTogglePassword();
});

function onTogglePassword() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');

    togglePassword.addEventListener('click', function () {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '🙈' : '🙉';
    });
}

function onSubmit() {
    const form = document.getElementById('loginForm');
    form.onsubmit = function (event) {
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
        } else {
            alert('Usuário ou senha inválidos.');
        }
    };
}

