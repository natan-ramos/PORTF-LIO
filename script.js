// Seleciona o botão de alternância de tema
const themeToggle = document.getElementById('theme-toggle');

// Seleciona o corpo da página
const body = document.body;

// Adiciona um "ouvinte de evento" ao botão. Quando o botão for clicado, a função será executada.
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no corpo da página
    body.classList.toggle('dark-mode');

    // Mudar o texto do botão
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Escuro';
    }
});