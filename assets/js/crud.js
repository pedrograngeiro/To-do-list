import { firebaseConfig } from './firebaseConfig.js';

export const listarTarefas = (database) => {
    const listaRef = database.ref('lista');

    return new Promise((resolve, reject) => {
        listaRef.on('value', (snapshot) => {
            const lista = snapshot.val();
            const tarefasComIDs = [];

            for (const itemKey in lista) {
                const item = lista[itemKey];
                item.id = itemKey; // Adicione o ID como um campo separado
                tarefasComIDs.push(item);
            }

            resolve(tarefasComIDs);
        });
    });
};

export const listarSistemaInterno = (database) => {
    const listaRef = database.ref('sistema_interno');

    return new Promise((resolve, reject) => {
        listaRef.on('value', (snapshot) => {
            const pasta = snapshot.val();
            const estados = Object.values(pasta);
            resolve(estados);
        });
    });
};

export const editarTarefa = async (data, numCard) => {
    return new Promise((resolve, reject) => {
        try {
            const resultado = data[numCard];
            if (resultado) {
                resolve(resultado);
            } else {
                reject('Item não encontrado');
            }
        } catch (error) {
            reject(error);
        }
    });
};

export const adicionarNovaTarefa = async (data) => {
    const novaTarefa = {
        nomeTarefa: data.nomeTarefa || 'Nova Tarefa',
        origemProjeto: data.origemProjeto || 'Outros',
        statusTarefa:
            data.statusTarefa === 'Em andamento'
                ? 'E'
                : data.statusTarefa === 'Desenvolvimento'
                ? 'D'
                : data.statusTarefa === 'Homologado'
                ? 'H'
                : data.statusTarefa === 'Producao'
                ? 'P'
                : data.statusTarefa || 'Em andamento',
        mensagem: data.mensagem || '',
        autorTarefa: data.autorTarefa || 'Nome do Usuário',
        created: data.created
            ? new Date(data.created).toLocaleDateString()
            : new Date().toLocaleDateString(),
        update: data.update
            ? new Date(data.update).toLocaleDateString()
            : new Date().toLocaleDateString(),
            history: [
                {
                    nomeTarefa: data.nomeTarefa || 'Nova Tarefa',
                    origemProjeto: data.origemProjeto || 'Outros',
                    statusTarefa:
                        data.statusTarefa === 'Em andamento'
                            ? 'E'
                            : data.statusTarefa === 'Desenvolvimento'
                            ? 'D'
                            : data.statusTarefa === 'Homologado'
                            ? 'H'
                            : data.statusTarefa === 'Producao'
                            ? 'P'
                            : data.statusTarefa || 'Em andamento',
                    mensagem: data.mensagem || '',
                    autorTarefa: data.autorTarefa || 'Nome do Usuário',
                    created: data.created
                        ? new Date(data.created).toLocaleDateString()
                        : new Date().toLocaleDateString(),
                    update: data.update
                        ? new Date(data.update).toLocaleDateString()
                        : new Date().toLocaleDateString(),
                },
            ],
    };

    const database = firebase.database(); // Obtenha a referência do banco de dados aqui (se não estiver no escopo anterior)
    const listaRef = database.ref('lista');

    // O ID único é gerado automaticamente quando usamos push()
    const novaTarefaRef = listaRef.push();

    try {
        await novaTarefaRef.set(novaTarefa);
        const novoID = novaTarefaRef.key; // Obtenha o ID gerado
        console.log('Nova tarefa adicionada com sucesso. ID:', novoID);
    } catch (error) {
        // console.log('Erro ao adicionar nova tarefa: ', error);
    }
};

export const editarTarefaPorId = async (database, taskId, novosDados) => {
    const listaRef = database.ref('lista');

    try {
        const tarefaRef = listaRef.child(taskId);
        await tarefaRef.update(novosDados);
        console.log('Tarefa atualizada com sucesso.');
    } catch (error) {
        console.error('Erro ao atualizar a tarefa:', error);
    }
};

// export const listarTarefasComIDs = (database) => {
//     const listaRef = database.ref('lista');

//     return new Promise((resolve, reject) => {
//         listaRef.on('value', (snapshot) => {
//             const lista = snapshot.val();
//             const tarefasComIDs = [];

//             for (const itemKey in lista) {
//                 const item = lista[itemKey];
//                 item.id = itemKey; // Adicione o ID como um campo separado
//                 tarefasComIDs.push(item);
//             }

//             resolve(tarefasComIDs);
//         });
//     });
// };

export const excluirTarefaPorId = async (database, taskId) => {
    const listaRef = database.ref('lista');

    try {
        await listaRef.child(taskId).remove();
        console.log('Tarefa excluída com sucesso.');
    } catch (error) {
        console.error('Erro ao excluir a tarefa:', error);
    }
};

(function () {
    firebase.initializeApp(firebaseConfig());

    const database = firebase.database();
    // listarUsuarios(database);

    // excluirTarefaPorId(database, '-Nenntff33YScxnImCke');
    // listarSistemaInterno(database)
    //     .then((estadosDoFirebase) => {
    //         console.log(
    //             'Lista de estados do sistema interno:',
    //             estadosDoFirebase
    //         );
    //     })
    //     .catch((error) => {
    //         console.error('Erro ao listar estados do sistema interno:', error);
    //     });

    // const listaRef = database.ref('lista');

    // listarTarefas(database);
})();
