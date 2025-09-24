// CÓDIGO DO TEMA CLARO/ESCURO
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = 'Modo Claro';
    } else {
        themeToggle.textContent = 'Modo Escuro';
    }
});


// CÓDIGO DA LISTA DE TAREFAS
const novaTarefaInput = document.getElementById('nova-tarefa');
const adicionarBtn = document.getElementById('adicionar-tarefa');
const listaDeTarefas = document.getElementById('lista');

// Adiciona um "ouvinte de evento" ao botão de adicionar
adicionarBtn.addEventListener('click', () => {
    // 1. Pega o texto do campo de entrada
    const textoDaTarefa = novaTarefaInput.value.trim();

    // 2. Verifica se o texto não está vazio
    if (textoDaTarefa !== '') {
        // 3. Cria um novo item de lista (<li>)
        const novoItem = document.createElement('li');
        
        // 4. Adiciona o texto ao novo item
        const spanTexto = document.createElement('span');
        spanTexto.textContent = textoDaTarefa;
        spanTexto.classList.add('tarefa-texto');
        novoItem.appendChild(spanTexto);

        // 5. Cria o botão de remover
        const removerBtn = document.createElement('button');
        removerBtn.textContent = 'Remover';
        removerBtn.classList.add('remover-btn');

        // 6. Adiciona um "ouvinte de evento" ao botão de remover
        removerBtn.addEventListener('click', () => {
            novoItem.remove();
        });

        // 7. Adiciona o botão de remover ao item da lista
        novoItem.appendChild(removerBtn);

        // 8. Adiciona o novo item à lista (<ul>)
        listaDeTarefas.appendChild(novoItem);
        
        // 9. Limpa o campo de entrada para uma nova tarefa
        novaTarefaInput.value = '';
    }
});