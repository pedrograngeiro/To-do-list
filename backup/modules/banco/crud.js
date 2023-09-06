import { firebaseConfig } from './firebaseConfig.js';

export const adicionarNovaTarefa = async (data) => {
    // Altere o parâmetro de 'tarefa' para 'data'
    const novaTarefa = {
        nome_task: data.nome_task || 'Nova Tarefa',
        homologacao: data.homologacao || false,
        status: data.status || 'andamento',
        created: new Date().toISOString(),
        update: null,
        complete: data.complete || false,
        user: data.user || 'Nome do Usuário',
    };

    const database = firebase.database(); // Obtenha a referência do banco de dados aqui (se não estiver no escopo anterior)
    const listaRef = database.ref('lista');

    const novaTarefaRef = listaRef.push();

    try {
        await novaTarefaRef.set(novaTarefa);
        console.log('Nova tarefa adicionada com sucesso!');
    } catch (error) {
        console.log('Erro ao adicionar nova tarefa: ', error);
    }
};

export const listarTarefas = (database) => {
    // Limpar a tabela

    const listaRef = database.ref('lista');

    const tableBody = document.querySelector('#item-table tbody');

    return new Promise((resolve, reject) => {
        listaRef.on('value', (snapshot) => {
            const lista = snapshot.val();
            for (const itemKey in lista) {
                const item = lista[itemKey];
                const row = document.createElement('tr');
                row.classList.add('todo-list__item');

                row.innerHTML = `
                    <td><input type="checkbox"></td>
                    <td>${item.nome_task}</td>
                    <td>${item.homologacao}</td>
                    <td>${item.status}</td>
                    <td>${item.created}</td>
                    <td>${item.update}</td>
                    <td>${item.complete}</td>
                    <td>${item.user}</td>
                `;

                tableBody.appendChild(row);
            }
        });
    });
};

(function () {
    firebase.initializeApp(firebaseConfig());

    const database = firebase.database();

    const listaRef = database.ref('lista');

    listarTarefas(database);
})();

// (function () {
//     const novaTarefaData = {
//         nome_task: 'Lorem Ipsum',
//         homologacao: 'Lorem Ipsum',
//         status: 'Lorem Ipsum',
//         complete: false,
//         user: 'LLLLL',
//     };

//     adicionarNovaTarefa(novaTarefaData);
// })();