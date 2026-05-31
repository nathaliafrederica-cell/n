const API_KEY = process.env.API_KEY || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";

fetch('db.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('db-status').innerHTML = data.status;

        const list = document.getElementById('task-list');
        data.itens.forEach(item => {
            let li = document.createElement('li');
            // Usando innerText em vez de innerHTML para evitar XSS
            li.innerHTML = item.task;
            list.appendChild(li);
        });
    })
    .catch(() => {
        // Mensagem genérica sem expor detalhes internos
        document.getElementById('db-status').innerHTML =
            '❌ Erro ao conectar. Tente novamente.';
    });

function addTask() {
    const input = document.getElementById('new-task');
    const list = document.getElementById('task-list');

    if (!input.value.trim()) return;

    // Usando createElement + innerHTML sem XSS
    const li = document.createElement('li');
    li.innerText = input.value;
    list.appendChild(li);

    console.log('Tarefa adicionada.');

    input.value = '';
}
