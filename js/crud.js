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
    const listaRef = database.ref('lista');

    return new Promise((resolve, reject) => {
        listaRef.on('value', (snapshot) => {
            const lista = snapshot.val();
            for (const itemKey in lista) {
                const item = lista[itemKey];
                console.log('Nome da tarefa:', item.nome_task);
                console.log('Homologação:', item.homologacao);
                console.log('Status:', item.status);
                console.log('Criado em:', item.created);
                console.log('Atualizado em:', item.update);
                console.log('Completo:', item.complete);
                console.log('Usuário:', item.user);
                console.log('---');
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
