// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de login e o container de login
    const loginBtn = document.getElementById('login-btn');
    const loginContainer = document.getElementById('login-container');

    // Adiciona um evento de clique ao botão de login
    loginBtn.addEventListener('click', (event) => {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Alterna a visibilidade do container de login
        if (loginContainer.classList.contains('hidden')) {
            loginContainer.classList.remove('hidden');
        } else {
            loginContainer.classList.add('hidden');
        }
    });
});

// Função para fechar a caixa de login
function closeLogin() {
    document.getElementById('login-container').classList.add('hidden');
}
